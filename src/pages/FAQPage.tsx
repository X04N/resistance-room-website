import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faqData, faqCategories } from '../data/faq';

export const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const filteredFAQ = selectedCategory === 'Todas' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre The Resistance Room
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory('Todas')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedCategory === 'Todas'
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            Todas
          </button>
          {faqCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {filteredFAQ.map((item, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {item.question}
                  </h3>
                </div>
                <div className="ml-4 text-green-500">
                  {openQuestion === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              
              {openQuestion === index && (
                <div className="px-6 pb-6 text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-300 mb-6">
            Estamos aquí para ayudarte. Contacta con nosotros y resolveremos todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all"
            >
              Página de Contacto
            </Link>
            <a 
              href="tel:688905020"
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
            >
              Llamar: 688 90 50 20
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
