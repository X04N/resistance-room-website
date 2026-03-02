import { useState, useEffect } from 'react';
import { getCookieConsent, type CookieConsent } from '../utils/cookies';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedConsent = getCookieConsent();
    setConsent(storedConsent);
    setIsLoading(false);
  }, []);

  const hasAnalyticsConsent = (): boolean => {
    return consent?.analytics === true;
  };

  return {
    consent,
    isLoading,
    hasAnalyticsConsent
  };
};
