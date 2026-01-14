/**
 * Configuration and Environment Variables
 */

// App-specific configuration
export const APP_CONFIG = {
  scheme: 'myapp',
  deepLinkURL: 'myapp://auth/callback',
  authCallbackPath: 'auth/callback',
};

// Supabase Configuration
export const SUPABASE_CONFIG = {
  url: 'https://ixcnegortcuusefeyykr.supabase.co',
  anonKey: 'sb_publishable_ODlbDtI4YG8he1hFtLkFOA_v0aGGz_C',
};

// Google Sign-In Configuration
export const GOOGLE_CONFIG = {
  webClientId: '992226340536-dkldld3leghcpd2qsv0qnhn0r4rg9le3.apps.googleusercontent.com',
  iosClientId: '992226340536-ncv6e92r2a6h0d4phlh7d93j0ik6mn24.apps.googleusercontent.com',
};

// Razorpay Configuration
export const RAZORPAY_CONFIG = {
  key: 'rzp_test_T4gOWkML32k09q',
};

// Validate configuration
export const validateConfig = () => {
  const errors: string[] = [];

  if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_')) {
    errors.push('SUPABASE_URL not configured');
  }
  if (!SUPABASE_CONFIG.anonKey || SUPABASE_CONFIG.anonKey.includes('YOUR_')) {
    errors.push('SUPABASE_ANON_KEY not configured');
  }
  if (!RAZORPAY_CONFIG.key || RAZORPAY_CONFIG.key.includes('YOUR_')) {
    errors.push('RAZORPAY_KEY not configured');
  }
  if (!GOOGLE_CONFIG.webClientId || GOOGLE_CONFIG.webClientId.includes('YOUR_')) {
    errors.push('GOOGLE_WEB_CLIENT_ID not configured');
  }

  if (errors.length > 0) {
    console.warn('⚠️ Configuration errors:', errors.join(', '));
  }

  return errors.length === 0;
};

// Export combined config object
export const config = {
  app: APP_CONFIG,
  supabase: SUPABASE_CONFIG,
  google: GOOGLE_CONFIG,
  razorpay: RAZORPAY_CONFIG,
};
