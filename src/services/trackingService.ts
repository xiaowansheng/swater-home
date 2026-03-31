import { TrackEnterParams, TrackEnterResult } from '@/types';

const VISITOR_UUID_KEY = 'visitor_uuid';
const THROTTLE_KEY = 'track_last_sent';
const THROTTLE_INTERVAL = 15_000; // 15秒内同一页面不上报

interface ThrottleRecord {
  [pageKey: string]: number;
}

function getLastSentMap(): ThrottleRecord {
  try {
    return JSON.parse(sessionStorage.getItem(THROTTLE_KEY) || '{}');
  } catch {
    return {};
  }
}

function setLastSentMap(map: ThrottleRecord): void {
  sessionStorage.setItem(THROTTLE_KEY, JSON.stringify(map));
}

export function isThrottled(pageKey: string): boolean {
  const map = getLastSentMap();
  const lastSent = map[pageKey];
  if (!lastSent) return false;
  return Date.now() - lastSent < THROTTLE_INTERVAL;
}

export function getOrCreateVisitorUuid(): string {
  let uuid = localStorage.getItem(VISITOR_UUID_KEY);
  if (!uuid) {
    uuid = crypto.randomUUID();
    localStorage.setItem(VISITOR_UUID_KEY, uuid);
  }
  return uuid;
}

export function parseUtmParams(search: string): Pick<TrackEnterParams, 'utmSource' | 'utmMedium' | 'utmCampaign'> {
  const params = new URLSearchParams(search);
  return {
    utmSource: params.get('utm_source') || undefined,
    utmMedium: params.get('utm_medium') || undefined,
    utmCampaign: params.get('utm_campaign') || undefined,
  };
}

function getTrackApiUrl(path: string): string {
  const base = import.meta.env.VITE_TRACK_API_BASE || '/api';
  return `${base}${path}`;
}

export async function trackEnter(params: TrackEnterParams): Promise<TrackEnterResult | null> {
  if (params.pageKey && isThrottled(params.pageKey)) return null;

  const result = await trackEnterRequest(params);

  if (result && params.pageKey) {
    const map = getLastSentMap();
    map[params.pageKey] = Date.now();
    setLastSentMap(map);
  }

  return result;
}

async function trackEnterRequest(params: TrackEnterParams): Promise<TrackEnterResult | null> {
  try {
    const res = await fetch(getTrackApiUrl('/public/track/enter'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data as TrackEnterResult;
  } catch {
    return null;
  }
}
