import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaClock } from 'react-icons/fa';

export const ContactPage = () => {
  const handleContactClick = (type: 'phone' | 'email') => {
    if (window.gtag) {
      window.gtag('event', `contact_${type}`, {
        event_category: 'engagement',
        event_label: type === 'phone' ? 'Phone Click' : 'Email Click'
      });
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contacto y Ubicación
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone */}
          <a
            href="tel:688905020"
            onClick={() => handleContactClick('phone')}
            className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/12 transition-all group"
          >
            <FaPhone className="text-5xl text-green-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">Teléfono</h3>
            <p className="text-3xl font-bold text-green-500 mb-2">688 90 50 20</p>
            <p className="text-gray-400">Llámanos para reservas o consultas</p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@resistanceroom.com"
            onClick={() => handleContactClick('email')}
            className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/12 transition-all group"
          >
            <FaEnvelope className="text-5xl text-green-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
            <p className="text-xl font-semibold text-green-500 mb-2">info@resistanceroom.com</p>
            <p className="text-gray-400">Envíanos un email en cualquier momento</p>
          </a>
        </div>

        {/* Location & Hours */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <FaMapMarkerAlt className="text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Ubicación</h3>
            <p className="text-xl text-gray-300 mb-2">Barcelona, España</p>
            <p className="text-gray-400 mb-4">
              La dirección exacta te será enviada por email tras confirmar tu reserva
            </p>
            <p className="text-sm text-gray-500">
              Fácil acceso en transporte público y aparcamiento público cercano
            </p>
          </div>

          {/* Hours */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <FaClock className="text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Horario</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Lunes - Jueves:</span>
                <span className="font-semibold">16:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Viernes:</span>
                <span className="font-semibold">16:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-semibold">10:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="font-semibold">10:00 - 22:00</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Horarios sujetos a disponibilidad. Consulta horarios especiales para días festivos.
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Síguenos en Redes Sociales</h3>
          <p className="text-gray-300 mb-6">
            Mantente al día con nuestras promociones, eventos especiales y novedades
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.facebook.com/resistance_room"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all group"
            >
              <FaFacebook className="text-4xl text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/resistance_room"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all group"
            >
              <FaInstagram className="text-4xl text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Cómo Llegar</h3>
          <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center">
              El mapa con la ubicación exacta se mostrará aquí tras tu reserva
            </p>
          </div>
          <p className="text-center text-gray-400 mt-4">
            Por razones de capacidad y organización, compartimos la dirección exacta solo con clientes que han reservado
          </p>
        </div>

        {/* Corporate */}
        <div className="mt-12 p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl font-bold text-white mb-4">Reservas Corporativas y Grupos Grandes</h3>
          <p className="text-gray-300 mb-4">
            ¿Estás organizando un evento corporativo, despedida de soltero/a, o una celebración especial para un grupo grande? 
            Contacta con nosotros para condiciones especiales y disponibilidad exclusiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:688905020"
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all text-center"
            >
              Llamar para Grupos
            </a>
            <a 
              href="mailto:info@resistanceroom.com?subject=Consulta Grupo Corporativo"
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-center"
            >
              Email Corporativo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
