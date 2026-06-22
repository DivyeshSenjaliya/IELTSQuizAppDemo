/**
 * Deep Linking Configuration
 * Handles OAuth callback deep links on both iOS and Android
 */

import { APP_CONFIG } from '../services/config';

/**
 * Linking configuration for React Navigation
 * Use this in your navigation container
 */
export const linking = {
  prefixes: [APP_CONFIG.deepLinkURL, `${APP_CONFIG.scheme}://`],
  config: {
    screens: {
      Splash: '*',
      Login: 'auth/login',
      Quiz: 'quiz',
      Report: 'report',
      // OAuth callback
      '*': {
        path: `${APP_CONFIG.authCallbackPath}`,
        parse: {
          access_token: (access_token: string) => access_token,
          refresh_token: (refresh_token: string) => refresh_token,
        },
      },
    },
  },
};

/**
 * Get the deep link URL for testing
 */
export const getTestDeepLinkUrl = () => {
  return APP_CONFIG.deepLinkURL;
};

/**
 * Test deep link locally (for development)
 * Usage: adb shell am start -a android.intent.action.VIEW -d "myapp://auth/callback?access_token=xxx&refresh_token=yyy"
 */
export const createTestOAuthCallback = (accessToken: string, refreshToken: string) => {
  return `${APP_CONFIG.deepLinkURL}?access_token=${accessToken}&refresh_token=${refreshToken}`;
};
