import { Link } from 'react-router-dom';
import { FaCheck, FaClock, FaUsers } from 'react-icons/fa';

export const PricesPage = () => {
  const pricingTiers = [
    { players: '2', price: '90', pricePerPerson: '45' },
    { players: '3', price: '100', pricePerPerson: '33.33' },
    { players: '4', price: '110', pricePerPerson: '27.50' },
    { players: '5', price: '125', pricePerPerson: '25', popular: true },
    { players: '6', price: '150', pricePerPerson: '25' },
    { players: '7', price: '175', pricePerPerson: '25' },
    { players: '8', price: '200', pricePerPerson: '25' },
    { players: '9', price: '225', pricePerPerson: '25' },
  ];

  const includes = [
    "60 minutos de experiencia inmersiva",
    "Game Master dedicado durante toda la sesión",
    "Fotos y vídeos de vuestra aventura",
    "Briefing inicial y debriefing final",
    "Certificado digital de completación",
    "Sistema de pistas si lo necesitáis",
    "Zona de espera confortable",
    "Decoración y ambientación temática"
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Precios y Tarifas
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Precios transparentes para tu aventura. Cuanto más grande sea tu grupo, mejor precio por persona
          </p>
        </div>

        {/* Key Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <FaClock className="text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Duración</h3>
            <p className="text-gray-300">
              La experiencia dura <strong className="text-white">60 minutos completos</strong>. Añade 15 minutos adicionales para el briefing inicial y el debriefing final.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <FaUsers className="text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Grupo Privado</h3>
            <p className="text-gray-300">
              <strong className="text-white">Reserva privada garantizada</strong>. No se mezclan grupos. Toda la sala es para vosotros.
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Tarifas por Grupo
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl backdrop-blur-xl border shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center hover:scale-105 transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/50' 
                    : 'bg-white/8 border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full">
                    Más Popular
                  </div>
                )}
                
                <div className="text-5xl font-bold text-green-500 mb-2">
                  {tier.players}
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {tier.players === '1' ? 'jugador' : 'jugadores'}
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  €{tier.price}
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  por grupo
                </div>
                <div className="text-lg text-green-400">
                  €{tier.pricePerPerson}/persona
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Night Session */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Sesión Especial Nocturna
          </h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl border border-purple-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Experiencia después de las 22:00
                </h3>
                <p className="text-gray-300 mb-4">
                  ¿Quieres una experiencia más intensa? Nuestras sesiones nocturnas ofrecen una atmósfera aún más inmersiva y misteriosa.
                </p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Ambientación especial nocturna</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Disponibilidad limitada</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Ideal para grupos de amigos</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-4">
                  desde €150
                </div>
                <p className="text-gray-400 mb-6">Consultar disponibilidad</p>
                <Link 
                  to="/reservas-lanzadera-alien-nave-espacial/"
                  className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all"
                >
                  Reservar Sesión Nocturna
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            ¿Qué Incluye el Precio?
          </h2>
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <ul className="grid md:grid-cols-2 gap-4">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-2">¿El precio es por persona o por grupo?</h3>
              <p className="text-gray-300">
                El precio es <strong className="text-white">por grupo completo</strong>, no por persona. Reserva la sala para tu grupo y paga un precio fijo independientemente del número exacto de participantes (dentro del rango seleccionado).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-2">¿Hay descuentos para grupos grandes?</h3>
              <p className="text-gray-300">
                Sí, como puedes ver en la tabla de precios, el <strong className="text-white">precio por persona disminuye</strong> significativamente con grupos más grandes. El punto óptimo es 5-6 jugadores.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-2">¿Puedo cambiar el número de jugadores después de reservar?</h3>
              <p className="text-gray-300">
                Sí, puedes modificar tu reserva hasta <strong className="text-white">24 horas antes</strong> de la sesión. Si necesitas aumentar el número de jugadores, confirma la disponibilidad con nosotros.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-2">¿Qué formas de pago aceptáis?</h3>
              <p className="text-gray-300">
                Aceptamos <strong className="text-white">tarjeta de crédito/débito, PayPal y transferencia bancaria</strong>. El pago se procesa de forma segura a través de nuestra plataforma de reservas TuriTop.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/reservas-lanzadera-alien-nave-espacial/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-500/50"
          >
            Reserva Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};
