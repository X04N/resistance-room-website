import { FaVrCardboard, FaUsers, FaCheckCircle } from 'react-icons/fa';
import experienceContent from '../../data/content/home-experience.json';

const iconMap: Record<string, any> = {
  FaVrCardboard,
  FaUsers,
  FaCheckCircle,
};

export const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          {experienceContent.title}
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          {experienceContent.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {experienceContent.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center hover:bg-white/12 transition-all"
              >
                <div className="flex justify-center">
                  {IconComponent && <IconComponent className="text-6xl mb-6 text-green-500" />}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
