import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { generateSecureSessionId, hashSensitiveData } from '@/utils/security';
import { getConsentPreferences } from '@/components/ConsentBanner';

interface AnalyticsEvent {
  event_type: string;
  event_name: string;
  properties?: Record<string, any>;
  session_id?: string;
  user_agent?: string;
}

export const useAnalytics = () => {
  const { toast } = useToast();
  const sessionId = useRef<string>();
  const sessionStartTime = useRef<number>();
  const pageStartTime = useRef<number>();

  // Generate session ID
  useEffect(() => {
    sessionId.current = generateSecureSessionId();
    sessionStartTime.current = Date.now();
    pageStartTime.current = performance.now();

    // Track page view only if consent given
    const consent = getConsentPreferences();
    if (consent?.analytics || consent?.performance) {
      trackEvent('page_view', 'landing_page', {
        url: window.location.href,
        referrer: document.referrer || 'direct',
        timestamp: Date.now()
      });
    }

    // Track session end on page unload
    const handleBeforeUnload = () => {
      const sessionDuration = Date.now() - (sessionStartTime.current || Date.now());
      trackEvent('session_end', 'page_unload', {
        session_duration_ms: sessionDuration,
        timestamp: Date.now()
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const trackEvent = useCallback(async (eventType: string, eventName: string, properties?: Record<string, any>) => {
    try {
      // Check consent before tracking
      const consent = getConsentPreferences();
      if (!consent) return;

      // Check if this type of tracking is allowed
      const shouldTrack = 
        (eventType === 'page_view' && consent.performance) ||
        (eventType === 'scroll' && consent.analytics) ||
        (eventType === 'click' && consent.interactions) ||
        (eventType === 'interaction' && consent.interactions) ||
        (eventType === 'form' && consent.analytics);

      if (!shouldTrack) return;

      // Hash sensitive data in properties
      const sanitizedProperties = await sanitizeAnalyticsProperties(properties || {});

      const eventData: AnalyticsEvent = {
        event_type: eventType,
        event_name: eventName,
        properties: sanitizedProperties,
        session_id: sessionId.current,
        user_agent: await hashSensitiveData(navigator.userAgent) // Hash user agent for privacy
      };

      // Generate truly anonymous user ID using session hash
      const anonymousUserId = await hashSensitiveData(sessionId.current || '');

      const { error } = await (supabase as any)
        .from('analytics_events')
        .insert([{
          ...eventData,
          user_id: anonymousUserId,
          ip_address: null // Will be handled by RLS/triggers if needed
        }]);

      if (error) {
        console.error('Analytics tracking error:', error);
      }
    } catch (err) {
      console.error('Failed to track event:', err);
    }
  }, []);

  const sanitizeAnalyticsProperties = async (properties: Record<string, any>) => {
    const sanitized: Record<string, any> = {};
    
    for (const [key, value] of Object.entries(properties)) {
      if (typeof value === 'string') {
        // Hash potentially sensitive data like URLs and emails
        if (key.includes('url') || key.includes('email') || key.includes('referrer')) {
          sanitized[key] = await hashSensitiveData(value);
        } else {
          sanitized[key] = value;
        }
      } else {
        sanitized[key] = value;
      }
    }
    
    return sanitized;
  };

  const trackClick = useCallback((element: string, targetUrl?: string) => {
    trackEvent('click', element, {
      target_url: targetUrl,
      timestamp: Date.now(),
      page_url: window.location.href
    });
  }, [trackEvent]);

  const trackScroll = useCallback((percentage: number) => {
    trackEvent('scroll', 'page_scroll', {
      scroll_percentage: percentage,
      timestamp: Date.now()
    });
  }, [trackEvent]);

  const trackInteraction = useCallback((element: string, interactionType: 'hover' | 'focus' | 'click', duration?: number) => {
    trackEvent('interaction', `${element}_${interactionType}`, {
      interaction_type: interactionType,
      duration_ms: duration,
      timestamp: Date.now()
    });
  }, [trackEvent]);

  const trackFormEvent = useCallback((formName: string, action: 'start' | 'submit' | 'error', data?: Record<string, any>) => {
    trackEvent('form', `${formName}_${action}`, {
      form_action: action,
      ...data,
      timestamp: Date.now()
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackClick,
    trackScroll,
    trackInteraction,
    trackFormEvent,
    sessionId: sessionId.current
  };
};