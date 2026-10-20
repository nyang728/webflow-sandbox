// Webflow Cloud mounts the app under a path (e.g. /app) and exposes it here.
// next/link handles the base path automatically; plain <a> tags to files in
// /public (like PDFs) and fetch() calls to API routes need it prepended.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path) {
  return `${basePath}${path}`;
}
