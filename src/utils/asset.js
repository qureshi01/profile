/**
 * Returns the correct absolute URL for a public-folder asset,
 * respecting Vite's configured base path (e.g. '/profile/' on GitHub Pages).
 *
 * Usage:  asset('assets/profile.jpg')
 *         asset('assets/resume-page1.png')
 */
export const asset = (path) => {
  // import.meta.env.BASE_URL ends with '/', path must NOT start with '/'
  const cleanPath = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
