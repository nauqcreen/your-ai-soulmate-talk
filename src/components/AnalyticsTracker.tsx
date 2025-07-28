import React, { useEffect, useRef } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface AnalyticsTrackerProps {
  children: React.ReactNode;
  element: string;
  trackClicks?: boolean;
  trackHover?: boolean;
  trackScroll?: boolean;
  className?: string;
}

export const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  children,
  element,
  trackClicks = true,
  trackHover = false,
  trackScroll = false,
  className = ''
}) => {
  const { trackClick, trackInteraction, trackScroll: trackScrollEvent } = useAnalytics();
  const elementRef = useRef<HTMLDivElement>(null);
  const hoverStartTime = useRef<number>();

  useEffect(() => {
    if (!trackScroll) return;

    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visiblePercentage = Math.max(0, Math.min(100, 
        ((windowHeight - rect.top) / (windowHeight + rect.height)) * 100
      ));

      if (visiblePercentage > 50) {
        trackScrollEvent(Math.round(visiblePercentage));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScroll, trackScrollEvent]);

  const handleClick = (e: React.MouseEvent) => {
    if (!trackClicks) return;
    
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    const targetUrl = link?.href;
    
    trackClick(element, targetUrl);
  };

  const handleMouseEnter = () => {
    if (!trackHover) return;
    hoverStartTime.current = Date.now();
  };

  const handleMouseLeave = () => {
    if (!trackHover || !hoverStartTime.current) return;
    
    const duration = Date.now() - hoverStartTime.current;
    trackInteraction(element, 'hover', duration);
    hoverStartTime.current = undefined;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};