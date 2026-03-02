import { useEffect } from 'react';
import { loadTuriTopWidget } from '../../utils/turitop';

export const TuriTopWidget = () => {
  const activityId = import.meta.env.VITE_TURITOP_ACTIVITY_ID || '';

  useEffect(() => {
    if (activityId) {
      loadTuriTopWidget(activityId);
    }
  }, [activityId]);

  if (!activityId) {
    return (
      <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
        <p className="text-gray-400">
          El widget de reservas no está configurado. Por favor, contacta con nosotros para reservar.
        </p>
      </div>
    );
  }

  return (
    <div className="turitop-widget-container rounded-2xl overflow-hidden">
      <div 
        className="turitop-widget" 
        data-activity-id={activityId}
        data-lang="es"
      />
    </div>
  );
};
