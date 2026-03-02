import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { hasUserResponded, setCookieConsent } from '../../utils/cookies';
import { initGA } from '../../utils/analytics';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't responded
    if (!hasUserResponded()) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);  // Accept analytics
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      initGA(measurementId);
    }
    setIsVisible(false);
  };

  const handleReject = () => {
    setCookieConsent(false);  // Reject analytics
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-6xl mx-auto glass-card border-2 border-green-500/30 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-50 mb-2">
              🍪 Este sitio utiliza cookies
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Utilizamos cookies propias y de terceros para analizar el tráfico web y mejorar tu experiencia. 
              Puedes aceptar todas las cookies o rechazarlas.
              <Link to="/politica-de-cookies" className="text-green-400 hover:text-green-300 underline ml-1">
                Más información
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleReject}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border-2 border-slate-600 rounded-lg font-semibold transition-all duration-200"
            >
              Rechazar Todo
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg"
            >
              Aceptar Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
