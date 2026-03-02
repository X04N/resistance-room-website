import { getCookieConsent } from './cookies';

// Type declarations are in src/types/global.d.ts
// No need to redeclare here

let gaInitialized = false;

export const initGA = (measurementId: string) => {
  // Only initialize if we have consent
  const consent = getCookieConsent();
  if (!consent?.analytics) {
    console.log('GA not initialized: no analytics consent');
    return;
  }

  // Don't initialize twice
  if (gaInitialized) {
    console.log('GA already initialized');
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', measurementId, {
    send_page_view: false,  // We'll send manually on route changes
    anonymize_ip: true      // Additional privacy measure
  });

  gaInitialized = true;
  console.log('GA initialized with consent');
};

export const isGALoaded = (): boolean => {
  return gaInitialized && typeof window.gtag === 'function';
};

export const logPageView = (path: string, title: string) => {
  if (!isGALoaded()) return;
  
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: title
  });
};

export const logEvent = (eventName: string, params?: object) => {
  if (!isGALoaded()) return;
  
  window.gtag?.('event', eventName, params);
};
