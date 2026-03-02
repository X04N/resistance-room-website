import { TuriTopWidget } from '../components/booking/TuriTopWidget';
import { GiftVoucherButtons } from '../components/booking/GiftVoucherButtons';
import { FaClock, FaUsers, FaLanguage, FaMapMarkerAlt } from 'react-icons/fa';

export const BookingPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Reserva tu Aventura
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Selecciona tu fecha y hora preferida para vivir la experiencia de escape de la lanzadera alienígena
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
            <FaClock className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-1">60 minutos</div>
            <div className="text-sm text-gray-400">Duración</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
            <FaUsers className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-1">2-9 jugadores</div>
            <div className="text-sm text-gray-400">Por sesión</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
            <FaLanguage className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-1">Español</div>
            <div className="text-sm text-gray-400">Inglés disponible</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
            <FaMapMarkerAlt className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-1">Barcelona</div>
            <div className="text-sm text-gray-400">España</div>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Selecciona tu Sesión
          </h2>
          <TuriTopWidget />
        </div>

        {/* Gift Vouchers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Bonos Regalo
          </h2>
          <GiftVoucherButtons />
        </div>

        {/* Important Information */}
        <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Información Importante
          </h3>
          
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">Edad mínima</h4>
              <p>Los menores de 16 años deben ir acompañados de un adulto.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Llegada</h4>
              <p>Por favor, llega 10 minutos antes de tu sesión para el briefing inicial.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Cancelaciones</h4>
              <p>Puedes cancelar o modificar tu reserva hasta 24 horas antes sin coste adicional.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Idioma</h4>
              <p>Las sesiones son en español por defecto. Si necesitas la experiencia en inglés, indícalo en tu reserva.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Accesibilidad</h4>
              <p>La sala requiere movilidad básica. Contacta con nosotros si tienes necesidades especiales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
