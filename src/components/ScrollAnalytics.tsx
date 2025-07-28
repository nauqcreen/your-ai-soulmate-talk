import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export const ScrollAnalytics = () => {
  const { trackScroll } = useAnalytics();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const scrollMilestones = new Set<number>();

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.pageYOffset;
        const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

        // Track milestones: 25%, 50%, 75%, 100%
        const milestones = [25, 50, 75, 100];
        milestones.forEach(milestone => {
          if (scrollPercentage >= milestone && !scrollMilestones.has(milestone)) {
            scrollMilestones.add(milestone);
            trackScroll(milestone);
          }
        });
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [trackScroll]);

  return null;
};