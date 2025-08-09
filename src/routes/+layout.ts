import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();

export const ssr = false;
export const prerender = true;