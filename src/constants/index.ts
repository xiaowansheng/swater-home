import * as Defaults from './templates';
import * as Local from './config.local';

// Export all constants from Defaults as a baseline, but override with any that exist in Local.

export const APP_NAME = (Local as any).APP_NAME ?? Defaults.APP_NAME;
export const OWNER_NAME = (Local as any).OWNER_NAME ?? Defaults.OWNER_NAME;
export const SITE_CONFIG = (Local as any).SITE_CONFIG ?? Defaults.SITE_CONFIG;
export const ABOUT_CONFIG = (Local as any).ABOUT_CONFIG ?? Defaults.ABOUT_CONFIG;
export const NAV_ITEMS = (Local as any).NAV_ITEMS ?? Defaults.NAV_ITEMS;
export const AIKO_SYSTEM_INSTRUCTION = (Local as any).AIKO_SYSTEM_INSTRUCTION ?? Defaults.AIKO_SYSTEM_INSTRUCTION;

// Projects logic:
// FEATURED_PROJECTS comes from Local (if defined) or Defaults (which is empty by default).
export const FEATURED_PROJECTS = (Local as any).FEATURED_PROJECTS ?? Defaults.FEATURED_PROJECTS;

// COMMUNITY_PROJECTS comes from Local (override) or Defaults.
export const COMMUNITY_PROJECTS = (Local as any).COMMUNITY_PROJECTS ?? Defaults.COMMUNITY_PROJECTS;

// Combined PROJECTS:
// Merges Local Projects (FEATURED) + Community Projects (Defaults), unless Local defines EVERYTHING.
export const PROJECTS = [...FEATURED_PROJECTS, ...COMMUNITY_PROJECTS];
