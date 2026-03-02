import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

export const Pricing = () => {
  const pricingTiers = [
    { players: '2', price: '90' },
    { players: '3', price: '100' },
    { players: '4', price: '110' },
    { players: '5', price: '125', popular: true },
    { players: '6', price: '150' },
    { players: '7', price: '175' },
    { players: '8', price: '200' },
    { players: '9', price: '225' },
  ];

  const includes = [
    "60 minutos de juego",
    "Game Master dedicado",
    "Fotos y vídeos de la experiencia",
    "Briefing y debriefing",
    "Certificado digital"
  ];

  return (
    <section id="precios" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Tarifas
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Elige el número de jugadores y reserva tu aventura
        </p>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <Link
              key={index}
              to="/reservas-lanzadera-alien-nave-espacial/"
              className={`relative p-6 rounded-2xl backdrop-blur-xl border shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center hover:scale-105 transition-all ${
                tier.popular 
                  ? 'bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/50' 
                  : 'bg-white/8 border-white/10 hover:bg-white/12'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full">
                  Popular
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
              <div className="text-sm text-gray-400">
                por grupo
              </div>
            </Link>
          ))}
        </div>

        {/* Night Session */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl border border-purple-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Sesión Nocturna
          </h3>
          <p className="text-gray-300 mb-4">
            Experiencia especial después de las 22:00
          </p>
          <div className="text-3xl font-bold text-purple-400 mb-4">
            desde €150
          </div>
          <Link 
            to="/reservas-lanzadera-alien-nave-espacial/"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all"
          >
            Consultar Disponibilidad
          </Link>
        </div>

        {/* Includes */}
        <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Tu experiencia incluye
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {includes.map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/precios/"
            className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
          >
            Ver Detalles Completos
          </Link>
        </div>
      </div>
    </section>
  );
};
