import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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
    sessionId.current = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStartTime.current = Date.now();
    pageStartTime.current = performance.now();

    // Track page view
    trackEvent('page_view', 'landing_page', {
      url: window.location.href,
      referrer: document.referrer || 'direct',
      timestamp: Date.now()
    });

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
      const eventData: AnalyticsEvent = {
        event_type: eventType,
        event_name: eventName,
        properties: properties || {},
        session_id: sessionId.current,
        user_agent: navigator.userAgent
      };

      const { error } = await (supabase as any)
        .from('analytics_events')
        .insert([{
          ...eventData,
          user_id: crypto.randomUUID(), // Generate anonymous user ID
          ip_address: null // Will be handled by RLS/triggers if needed
        }]);

      if (error) {
        console.error('Analytics tracking error:', error);
      }
    } catch (err) {
      console.error('Failed to track event:', err);
    }
  }, []);

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