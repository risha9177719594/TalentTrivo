/**
 * Client-side environment configuration.
 * Safely reads Vite environment variables with fallback defaults.
 */
export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};
