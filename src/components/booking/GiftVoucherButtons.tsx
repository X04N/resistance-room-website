import { FaGift, FaTicketAlt } from 'react-icons/fa';
import { getTuriTopGiftVoucherUrl } from '../../utils/turitop';

export const GiftVoucherButtons = () => {
  const handleGiftVoucherClick = (action: 'buy' | 'redeem') => {
    const url = getTuriTopGiftVoucherUrl(action);
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Track analytics event if GA is loaded
    if (window.gtag) {
      window.gtag('event', `gift_voucher_${action}`, {
        event_category: 'engagement',
        event_label: action === 'buy' ? 'Comprar Bono Regalo' : 'Canjear Bono Regalo'
      });
    }
  };

  return (
    <div id="regalo" className="grid md:grid-cols-2 gap-6">
      <button
        onClick={() => handleGiftVoucherClick('buy')}
        className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl border border-purple-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:from-purple-500/30 hover:to-purple-600/30 transition-all text-center group"
      >
        <FaGift className="text-5xl text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold text-white mb-2">
          Comprar Bono Regalo
        </h3>
        <p className="text-gray-300 mb-4">
          Regala una experiencia inolvidable a tus amigos o familiares
        </p>
        <span className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg group-hover:bg-purple-700 transition-all">
          Comprar Ahora
        </span>
      </button>

      <button
        onClick={() => handleGiftVoucherClick('redeem')}
        className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/12 transition-all text-center group"
      >
        <FaTicketAlt className="text-5xl text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold text-white mb-2">
          Canjear Bono Regalo
        </h3>
        <p className="text-gray-300 mb-4">
          ¿Ya tienes un bono? Canjéalo aquí y reserva tu sesión
        </p>
        <span className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg group-hover:bg-green-700 transition-all">
          Canjear Bono
        </span>
      </button>
    </div>
  );
};
