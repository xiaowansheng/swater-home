import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
}

export const usePerformance = () => {
  const reportMetric = useCallback((metric: PerformanceMetrics) => {
    // In production, you would send this to your analytics service
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metric:', metric);
    }
  }, []);

  useEffect(() => {
    // Web Vitals measurement
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              reportMetric({ fcp: entry.startTime });
            }
            break;
          case 'largest-contentful-paint':
            reportMetric({ lcp: entry.startTime });
            break;
          case 'first-input':
            reportMetric({ fid: (entry as any).processingStart - entry.startTime });
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              reportMetric({ cls: (entry as any).value });
            }
            break;
        }
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.warn('Some performance metrics are not supported in this browser');
    }

    return () => observer.disconnect();
  }, [reportMetric]);

  // Resource loading performance
  const measureResourceLoading = useCallback(() => {
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(resource => resource.duration > 1000);
    
    if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('Slow loading resources:', slowResources);
    }
  }, []);

  useEffect(() => {
    // Measure after initial load
    const timer = setTimeout(measureResourceLoading, 2000);
    return () => clearTimeout(timer);
  }, [measureResourceLoading]);

  return { reportMetric };
};