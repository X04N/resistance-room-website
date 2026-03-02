import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://www.resistanceroom.com/wp-content/uploads/photo-manipulation-1825450.jpg)',
        }}
      >
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          ¿Podrás escapar de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">nave alienígena</span>?
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Únete a la resistencia humana en esta aventura post-apocalíptica. 60 minutos para escapar. ¿Estás listo?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/reservas-lanzadera-alien-nave-espacial/"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-500/50"
          >
            Reserva Ahora
          </Link>
          
          <Link 
            to="/que-es-un-escape-room-2/"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
          >
            ¿Qué es un Escape Room?
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500">60</div>
            <div className="text-sm text-gray-400 mt-1">minutos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500">2-9</div>
            <div className="text-sm text-gray-400 mt-1">jugadores</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500">100%</div>
            <div className="text-sm text-gray-400 mt-1">inmersión</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
