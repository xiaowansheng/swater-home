import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getOrCreateVisitorUuid, parseUtmParams, trackEnter } from '@/services/trackingService';

const VisitorTracker: React.FC = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

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

  // 首次渲染时也需要上报（因为 useLocation 的变化可能不触发）
  useEffect(() => {
    if (!isFirstRender.current) return;
    isFirstRender.current = false;
  }, []);

  return null;
};

export default VisitorTracker;
