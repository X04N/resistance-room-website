export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  // Reservas
  {
    question: "¿Cómo puedo reservar?",
    answer: "Puedes reservar directamente a través de nuestra página web en la sección de Reservas. Selecciona el número de jugadores, fecha y hora que prefieras. También puedes llamarnos al 688 90 50 20.",
    category: "Reservas"
  },
  {
    question: "¿Puedo cancelar o modificar mi reserva?",
    answer: "Sí, puedes cancelar o modificar tu reserva hasta 24 horas antes de la sesión sin coste adicional. Para hacerlo, contacta con nosotros por teléfono o email.",
    category: "Reservas"
  },
  {
    question: "¿Cuánto dura la experiencia total?",
    answer: "La experiencia dentro de la sala dura 60 minutos. Debes contar con 15 minutos adicionales para el briefing inicial y el debriefing final. En total, aproximadamente 75-80 minutos.",
    category: "Reservas"
  },
  {
    question: "¿Con cuánta antelación debo llegar?",
    answer: "Te recomendamos llegar 10 minutos antes de tu hora reservada para completar el check-in y recibir las instrucciones iniciales sin prisas.",
    category: "Reservas"
  },

  // Grupo y Jugadores
  {
    question: "¿Cuántos jugadores pueden participar?",
    answer: "Nuestro escape room está diseñado para grupos de 2 a 9 jugadores. El número ideal es de 4-6 personas para disfrutar al máximo de la experiencia.",
    category: "Grupo"
  },
  {
    question: "¿Hay edad mínima?",
    answer: "Los menores de 16 años deben ir acompañados de un adulto responsable. No hay edad máxima, ¡todos son bienvenidos!",
    category: "Grupo"
  },
  {
    question: "¿Pueden unirse grupos diferentes?",
    answer: "No. Todas nuestras reservas son privadas. La sala es exclusivamente para tu grupo, no se mezclan equipos.",
    category: "Grupo"
  },
  {
    question: "¿Es necesario tener experiencia previa?",
    answer: "No, no es necesario haber hecho un escape room antes. Nuestro Game Master te explicará todo lo que necesitas saber antes de empezar.",
    category: "Grupo"
  },

  // La Experiencia
  {
    question: "¿Es de miedo?",
    answer: "No es una experiencia de terror. Es una aventura de ciencia ficción post-apocalíptica con tensión y emoción, pero sin sustos ni elementos de horror.",
    category: "Experiencia"
  },
  {
    question: "¿Es claustrofóbico?",
    answer: "No. Las salas son espaciosas y están bien ventiladas. Además, siempre puedes salir si lo necesitas. Tu seguridad es nuestra prioridad.",
    category: "Experiencia"
  },
  {
    question: "¿Qué pasa si no conseguimos escapar?",
    answer: "¡No pasa nada! Solo alrededor del 40% de los equipos logran escapar en su primer intento. Lo importante es disfrutar del desafío y la experiencia en equipo.",
    category: "Experiencia"
  },
  {
    question: "¿Puedo pedir pistas?",
    answer: "Sí. Nuestro Game Master está monitorizando la partida y puede ofrecerte pistas si las necesitas. No dudes en pedirlas si te quedas atascado.",
    category: "Experiencia"
  },
  {
    question: "¿Está disponible en inglés?",
    answer: "Sí. Por defecto, la experiencia es en español, pero podemos realizarla en inglés si lo solicitas al hacer la reserva.",
    category: "Experiencia"
  },

  // Precios y Pagos
  {
    question: "¿El precio es por persona o por grupo?",
    answer: "El precio es por grupo completo, no por persona. Pagas un precio fijo para tu grupo independientemente del número exacto de participantes (dentro del rango seleccionado).",
    category: "Precios"
  },
  {
    question: "¿Qué formas de pago aceptáis?",
    answer: "Aceptamos tarjeta de crédito/débito, PayPal y transferencia bancaria. El pago se procesa de forma segura a través de nuestra plataforma de reservas.",
    category: "Precios"
  },
  {
    question: "¿Ofrecéis descuentos?",
    answer: "El precio por persona disminuye con grupos más grandes. También ofrecemos promociones especiales ocasionalmente. Síguenos en redes sociales para estar al tanto.",
    category: "Precios"
  },
  {
    question: "¿Puedo comprar un bono regalo?",
    answer: "¡Sí! Ofrecemos bonos regalo que puedes comprar en nuestra página de reservas. Es el regalo perfecto para cualquier ocasión.",
    category: "Precios"
  },

  // Ubicación y Acceso
  {
    question: "¿Dónde estáis ubicados?",
    answer: "Estamos en Barcelona, España. La dirección exacta te será enviada por email tras confirmar tu reserva.",
    category: "Ubicación"
  },
  {
    question: "¿Hay aparcamiento?",
    answer: "Hay aparcamiento público disponible cerca de nuestras instalaciones. Te enviaremos información detallada sobre opciones de aparcamiento con tu confirmación de reserva.",
    category: "Ubicación"
  },
  {
    question: "¿Es accesible para personas con movilidad reducida?",
    answer: "La experiencia requiere movilidad básica (estar de pie, agacharse, alcanzar objetos). Si tienes necesidades especiales, por favor contáctanos para ver cómo podemos ayudarte.",
    category: "Ubicación"
  },

  // Otros
  {
    question: "¿Puedo hacer fotos o vídeos dentro?",
    answer: "Por razones de preservación de la experiencia para otros jugadores, no se permite hacer fotos o vídeos dentro de la sala. Sin embargo, ¡nosotros tomamos fotos de tu equipo que recibirás al finalizar!",
    category: "Otros"
  },
  {
    question: "¿Qué debo llevar?",
    answer: "Solo necesitas venir con ropa cómoda y ganas de divertirte. Proporcionamos todo lo necesario para la experiencia.",
    category: "Otros"
  },
  {
    question: "¿Es una buena actividad para team building?",
    answer: "¡Absolutamente! Muchas empresas nos eligen para actividades de team building. La experiencia fomenta la comunicación, colaboración y trabajo en equipo. Contacta con nosotros para grupos corporativos.",
    category: "Otros"
  }
];

export const faqCategories = [
  "Reservas",
  "Grupo",
  "Experiencia",
  "Precios",
  "Ubicación",
  "Otros"
];
