import { FaVrCardboard, FaUsers, FaCheckCircle } from 'react-icons/fa';

export const Experience = () => {
  const features = [
    {
      icon: <FaVrCardboard className="text-6xl mb-6 text-green-500" />,
      title: "Inmersión Total",
      description: "Tecnología Arduino y efectos especiales que te transportan a un futuro post-apocalíptico"
    },
    {
      icon: <FaUsers className="text-6xl mb-6 text-green-500" />,
      title: "Trabajo en Equipo",
      description: "Colabora con tu equipo para resolver enigmas y escapar de la lanzadera alienígena"
    },
    {
      icon: <FaCheckCircle className="text-6xl mb-6 text-green-500" />,
      title: "100% Real",
      description: "Mecanismos físicos y desafíos reales. No es virtual, es una experiencia tangible"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Una experiencia única
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Sumérgete en una aventura donde cada segundo cuenta y cada decisión importa
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center hover:bg-white/12 transition-all"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
