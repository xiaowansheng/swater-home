import { TrackEnterParams, TrackEnterResult } from '@/types';

const VISITOR_UUID_KEY = 'visitor_uuid';
const THROTTLE_KEY = 'track_last_sent';
const THROTTLE_INTERVAL = 15_000; // 15秒内同一页面不上报

// 内存缓存，避免每次读取都 JSON.parse
const lastSentCache = new Map<string, number>();

try {
  const stored = JSON.parse(sessionStorage.getItem(THROTTLE_KEY) || '{}');
  for (const [k, v] of Object.entries(stored)) {
    if (typeof v === 'number') lastSentCache.set(k, v);
  }
} catch { /* ignore */ }

function persistLastSent(): void {
  // 淘汰过期条目后再持久化
  const now = Date.now();
  for (const [k, t] of lastSentCache) {
    if (now - t >= THROTTLE_INTERVAL) lastSentCache.delete(k);
  }
  sessionStorage.setItem(THROTTLE_KEY, JSON.stringify(Object.fromEntries(lastSentCache)));
}

function isThrottled(pageKey: string): boolean {
  const lastSent = lastSentCache.get(pageKey);
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

const TRACK_API_BASE = import.meta.env.VITE_TRACK_API_BASE || '/';

function getTrackApiUrl(path: string): string {
  return `${TRACK_API_BASE}${path}`;
}

export async function trackEnter(params: TrackEnterParams): Promise<TrackEnterResult | null> {
  if (params.pageKey && isThrottled(params.pageKey)) return null;

  const result = await trackEnterRequest(params);

  if (result && params.pageKey) {
    lastSentCache.set(params.pageKey, Date.now());
    persistLastSent();
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
