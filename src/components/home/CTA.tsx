import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaGift } from 'react-icons/fa';

export const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="p-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para la aventura?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Reserva tu sesión ahora y prepárate para vivir una experiencia inolvidable
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/reservas-lanzadera-alien-nave-espacial/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-500/50"
            >
              <FaCalendarAlt />
              Reserva tu Sesión
            </Link>
            
            <Link 
              to="/reservas-lanzadera-alien-nave-espacial/#regalo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
            >
              <FaGift />
              Regala una Experiencia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
