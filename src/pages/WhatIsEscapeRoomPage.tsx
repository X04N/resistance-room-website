import { Link } from 'react-router-dom';
import { FaPuzzlePiece, FaUsers, FaClock, FaBrain, FaLightbulb, FaKey } from 'react-icons/fa';

export const WhatIsEscapeRoomPage = () => {
  const howItWorks = [
    {
      icon: <FaKey className="text-5xl text-green-500 mb-4" />,
      title: "1. Llegas y te preparas",
      description: "Nuestro Game Master te recibe y te explica la historia y las reglas básicas del juego."
    },
    {
      icon: <FaPuzzlePiece className="text-5xl text-green-500 mb-4" />,
      title: "2. Entras en la sala",
      description: "La puerta se cierra y comienza la cuenta atrás. 60 minutos para escapar."
    },
    {
      icon: <FaBrain className="text-5xl text-green-500 mb-4" />,
      title: "3. Resuelves enigmas",
      description: "Busca pistas, resuelve puzzles y desbloquea secretos trabajando en equipo."
    },
    {
      icon: <FaLightbulb className="text-5xl text-green-500 mb-4" />,
      title: "4. Escapas (o no)",
      description: "¿Lograréis escapar antes de que se acabe el tiempo? ¡Solo hay una manera de saberlo!"
    }
  ];

  const benefits = [
    {
      title: "Trabajo en Equipo",
      description: "Perfecto para fortalecer lazos con amigos, familia o compañeros de trabajo."
    },
    {
      title: "Desafío Mental",
      description: "Pon a prueba tu lógica, creatividad y capacidad de resolver problemas."
    },
    {
      title: "Experiencia Única",
      description: "Una aventura inmersiva que recordarás durante mucho tiempo."
    },
    {
      title: "Diversión Garantizada",
      description: "Tanto si escapas como si no, la experiencia es emocionante y divertida."
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            ¿Qué es un Escape Room?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un escape room es un juego de aventura físico y mental en el que un equipo de jugadores resuelve enigmas y puzzles para lograr un objetivo en un tiempo limitado
          </p>
        </div>

        {/* Main Explanation */}
        <div className="mb-16 p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <FaUsers className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">En Equipo</h3>
              <p className="text-gray-300">
                Colabora con 2-9 personas para resolver los desafíos
              </p>
            </div>
            <div>
              <FaClock className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">60 Minutos</h3>
              <p className="text-gray-300">
                Tiempo límite para completar la misión y escapar
              </p>
            </div>
            <div>
              <FaPuzzlePiece className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Resuelve Enigmas</h3>
              <p className="text-gray-300">
                Puzzles, acertijos y mecanismos te bloquean el camino
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            ¿Cómo Funciona?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {howItWorks.map((step, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center"
              >
                <div className="flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Resistance Room Story */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Nuestra Historia: The Resistance Room
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
            <p>
              En <strong className="text-white">The Resistance Room</strong>, no es solo un escape room cualquiera. Te transportamos a un <strong className="text-white">futuro post-apocalíptico</strong> donde la humanidad ha sido esclavizada por una raza alienígena.
            </p>
            <p>
              Tú y tu equipo sois parte de la <strong className="text-white">resistencia humana</strong>. Vuestra misión: infiltraros en una lanzadera alienígena y escapar antes de que os descubran.
            </p>
            <p>
              Utilizamos <strong className="text-white">tecnología Arduino</strong> para crear mecanismos reales, efectos especiales inmersivos y una ambientación que te hará olvidar que estás en Barcelona.
            </p>
            <p className="text-lg font-semibold text-white">
              ¿Estás listo para unirte a la resistencia?
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            ¿Por Qué Hacer un Escape Room?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Preguntas Comunes
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-2">¿Es claustrofóbico?</h3>
              <p className="text-gray-300">
                No. Aunque estás "encerrado", las salas son espaciosas y siempre puedes salir si lo necesitas. La seguridad es nuestra prioridad.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-2">¿Es de miedo?</h3>
              <p className="text-gray-300">
                No es una experiencia de terror. Es una aventura post-apocalíptica con tensión y emoción, pero no sustos ni elementos de horror.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-2">¿Necesito experiencia previa?</h3>
              <p className="text-gray-300">
                No. Diseñamos la experiencia para que sea accesible tanto para novatos como para veteranos de escape rooms. Nuestro Game Master os guiará.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-2">¿Qué pasa si no conseguimos escapar?</h3>
              <p className="text-gray-300">
                ¡No pasa nada! Aproximadamente el 40% de los equipos logran escapar. Lo importante es disfrutar del proceso, trabajar en equipo y divertirse. ¡Siempre podéis volver a intentarlo!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <h2 className="text-3xl font-bold mb-4 text-white">
            ¿Listo para la Aventura?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Reserva tu sesión y descubre por ti mismo por qué los escape rooms son una de las actividades más populares del mundo
          </p>
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
