import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  trackingId?: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics = ({ trackingId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    if (!trackingId) return;

    // Check if gtag is already loaded
    if (window.gtag) {
      window.gtag('config', trackingId);
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', trackingId);
    };

    return () => {
      // Cleanup: remove script if component unmounts
      document.head.removeChild(script);
    };
  }, [trackingId]);

  return null;
};

export default GoogleAnalytics;