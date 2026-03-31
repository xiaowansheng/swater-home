import { TrackEnterParams, TrackEnterResult } from '@/types';

const VISITOR_UUID_KEY = 'visitor_uuid';

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
