/**
 * TuriTop Widget Integration
 * Loads the TuriTop booking widget script dynamically
 */

export const loadTuriTopWidget = (activityId: string): void => {
  // Check if script already exists
  if (document.getElementById('turitop-widget-script')) {
    return;
  }

  // Create script element
  const script = document.createElement('script');
  script.id = 'turitop-widget-script';
  script.src = 'https://app.turitop.com/js/widget.js';
  script.async = true;
  script.defer = true;

  // Set data attributes for configuration
  script.setAttribute('data-activity-id', activityId);
  script.setAttribute('data-lang', 'es');
  
  // Append to document
  document.body.appendChild(script);
};

export const getTuriTopGiftVoucherUrl = (action: 'buy' | 'redeem'): string => {
  const activityId = import.meta.env.VITE_TURITOP_ACTIVITY_ID || '';
  const baseUrl = 'https://app.turitop.com';
  
  if (action === 'buy') {
    return `${baseUrl}/es/gift-voucher/${activityId}`;
  } else {
    return `${baseUrl}/es/redeem-voucher/${activityId}`;
  }
};
