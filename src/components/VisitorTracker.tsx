import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getOrCreateVisitorUuid, parseUtmParams, trackEnter } from '@/services/trackingService';

const VisitorTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const visitorUuid = getOrCreateVisitorUuid();
    const utm = parseUtmParams(location.search);

    trackEnter({
      visitorUuid,
      pageKey: `PAGE:${location.pathname}`,
      pageUrl: window.location.href,
      referer: document.referrer || undefined,
      ...utm,
    });
  }, [location.pathname, location.search]);

  return null;
};

export default VisitorTracker;
