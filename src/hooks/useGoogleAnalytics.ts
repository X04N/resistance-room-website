import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, logPageView, isGALoaded } from '../utils/analytics';
import { getCookieConsent } from '../utils/cookies';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  // Initialize GA on mount if we have consent
  useEffect(() => {
    const consent = getCookieConsent();
    if (consent?.analytics && !isGALoaded()) {
      const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
      if (measurementId) {
        initGA(measurementId);
      }
    }
  }, []);

  // Track page views on route changes
  useEffect(() => {
    // Only track if GA is loaded (which means we have consent)
    if (isGALoaded()) {
      logPageView(location.pathname, document.title);
    }
  }, [location]);
};
