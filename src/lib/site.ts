/**
 * Single source of truth for the site's public address.
 *
 * To move to a custom domain, change `siteUrl` here and nothing else:
 * metadata, canonicals, JSON-LD, the sitemap, robots.txt, the share card
 * and the CV all read from it.
 */
export const siteUrl = "https://med-amin-makni.vercel.app";

/** Host on its own, for places that display the address rather than link it. */
export const siteDomain = siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
