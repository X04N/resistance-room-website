export interface CookieConsent {
  necessary: boolean;    // Always true (required for site function)
  analytics: boolean;    // Google Analytics
  timestamp: number;     // When consent was given
  version: string;       // Policy version (for future updates)
}

const CONSENT_KEY = 'cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;

export const getCookieConsent = (): CookieConsent | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    
    const consent = JSON.parse(stored) as CookieConsent;
    
    // Check if consent is still valid (1 year)
    const daysSinceConsent = (Date.now() - consent.timestamp) / (1000 * 60 * 60 * 24);
    if (daysSinceConsent > CONSENT_EXPIRY_DAYS) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    
    return consent;
  } catch {
    return null;
  }
};

export const setCookieConsent = (analytics: boolean) => {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    timestamp: Date.now(),
    version: '1.0'
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
};

export const hasUserResponded = (): boolean => {
  return getCookieConsent() !== null;
};

export const clearCookieConsent = () => {
  localStorage.removeItem(CONSENT_KEY);
};
