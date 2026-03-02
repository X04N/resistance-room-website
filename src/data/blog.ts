export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "consejos-para-tu-primer-escape-room",
    title: "10 Consejos para Tu Primer Escape Room",
    excerpt: "¿Primera vez en un escape room? Estos consejos te ayudarán a disfrutar al máximo de la experiencia y aumentar tus posibilidades de éxito.",
    content: `
      <p>Si nunca has participado en un escape room, es normal sentir algo de nervios o incertidumbre. ¡No te preocupes! Aquí te dejamos 10 consejos que te ayudarán a disfrutar al máximo de tu primera experiencia.</p>
      
      <h2>1. Llega con tiempo</h2>
      <p>Llega al menos 10 minutos antes de tu sesión. Esto te permitirá relajarte, conocer a tu equipo si no os conocéis todos, y escuchar atentamente las instrucciones del Game Master sin prisas.</p>
      
      <h2>2. Escucha las instrucciones</h2>
      <p>El briefing inicial es crucial. El Game Master te explicará la historia, las reglas y te dará pistas importantes. Presta atención a cada detalle.</p>
      
      <h2>3. Comunica todo</h2>
      <p>Si encuentras algo, ¡dilo en voz alta! La comunicación es la clave del éxito. Un objeto que tú encuentres puede ser la pieza que otro miembro del equipo necesita.</p>
      
      <h2>4. Divide y vencerás</h2>
      <p>No todos necesitáis trabajar en el mismo puzzle al mismo tiempo. Dividid las tareas para ser más eficientes, pero mantened la comunicación.</p>
      
      <h2>5. Busca por todas partes</h2>
      <p>Los diseñadores de escape rooms pueden ser ingeniosos. Busca en lugares altos, bajos, detrás de objetos... pero siempre con cuidado y sin usar fuerza excesiva.</p>
      
      <h2>6. Todo tiene un propósito</h2>
      <p>En un escape room bien diseñado, cada objeto está ahí por una razón. Si algo parece fuera de lugar o inusual, probablemente sea importante.</p>
      
      <h2>7. No tengas miedo de pedir pistas</h2>
      <p>Si lleváis más de 10 minutos atascados en un puzzle, no dudéis en pedir una pista. Es mejor avanzar con ayuda que perder tiempo valioso frustrados.</p>
      
      <h2>8. Organiza las pistas usadas</h2>
      <p>Una vez que hayáis usado un código o resuelto un puzzle, apartad esos elementos. Esto os ayudará a no perder tiempo revisando cosas que ya habéis completado.</p>
      
      <h2>9. Piensa fuera de la caja</h2>
      <p>Los puzzles pueden requerir pensamiento lateral. No siempre la solución es obvia. A veces necesitas combinar elementos de formas inesperadas.</p>
      
      <h2>10. ¡Diviértete!</h2>
      <p>Lo más importante es disfrutar de la experiencia. Escapar está bien, pero lo que realmente importa es el proceso, trabajar en equipo y crear recuerdos juntos.</p>
      
      <h2>Bonus: Ven a The Resistance Room</h2>
      <p>En The Resistance Room, diseñamos nuestra experiencia para que sea emocionante tanto para novatos como para veteranos. Nuestro Game Master estará ahí para asegurarse de que tengáis la mejor experiencia posible.</p>
      
      <p><strong>¿Listo para tu primera aventura?</strong> <a href="/reservas-lanzadera-alien-nave-espacial/">Reserva ahora</a> y únete a la resistencia.</p>
    `,
    author: "The Resistance Room",
    date: "2026-02-15",
    category: "Consejos"
  },
  {
    slug: "historia-escape-rooms",
    title: "La Historia de los Escape Rooms: De Juegos Online a Experiencias Reales",
    excerpt: "Descubre cómo los escape rooms evolucionaron desde videojuegos de navegador hasta convertirse en una de las actividades de ocio más populares del mundo.",
    content: `
      <p>Los escape rooms se han convertido en un fenómeno global, pero ¿alguna vez te has preguntado cómo surgió esta forma de entretenimiento? La historia es fascinante.</p>
      
      <h2>Los orígenes: Videojuegos Point-and-Click</h2>
      <p>Todo comenzó en los años 80 y 90 con los videojuegos de aventuras point-and-click. Juegos como "Myst" y "The 7th Guest" desafiaban a los jugadores a resolver puzzles para avanzar en la historia.</p>
      
      <h2>El primer escape room online</h2>
      <p>En 2004, el desarrollador japonés Toshimitsu Takagi creó "Crimson Room", considerado el primer escape room digital. El objetivo era simple pero adictivo: escapar de una habitación roja resolviendo puzzles.</p>
      
      <h2>La transición al mundo físico</h2>
      <p>El primer escape room físico se inauguró en Japón en 2007, creado por Takao Kato de la empresa SCRAP. Llamado "Real Escape Game", llevó el concepto digital al mundo real.</p>
      
      <h2>La expansión global (2010-2015)</h2>
      <p>Los escape rooms llegaron a Europa y América alrededor de 2012-2013. Budapest, Hungría, se convirtió en la "capital europea" de los escape rooms, con docenas de salas en toda la ciudad.</p>
      
      <h2>La revolución tecnológica</h2>
      <p>A medida que la industria creció, también lo hizo la sofisticación de las salas. Se incorporaron:</p>
      <ul>
        <li>Mecanismos electromagnéticos controlados por Arduino y Raspberry Pi</li>
        <li>Efectos de luz y sonido inmersivos</li>
        <li>Decoraciones cinematográficas</li>
        <li>Narrativas complejas y ramificadas</li>
      </ul>
      
      <h2>Los escape rooms hoy</h2>
      <p>En 2026, se estima que hay más de 50,000 escape rooms en todo el mundo. Se han diversificado en múltiples géneros:</p>
      <ul>
        <li>Horror y terror</li>
        <li>Ciencia ficción (como The Resistance Room)</li>
        <li>Misterio y detective</li>
        <li>Fantasía y magia</li>
        <li>Aventura y acción</li>
      </ul>
      
      <h2>El futuro: Realidad Virtual y Aumentada</h2>
      <p>Los escape rooms están experimentando con VR y AR para crear experiencias híbridas que combinan elementos físicos y digitales. Sin embargo, muchos fans prefieren la tangibilidad de los puzzles físicos.</p>
      
      <h2>The Resistance Room: Parte de esta evolución</h2>
      <p>En The Resistance Room, honramos esta historia utilizando tecnología Arduino para crear mecanismos reales, no virtuales. Creemos que hay algo especial en tocar, manipular y resolver puzzles físicos en un entorno inmersivo.</p>
      
      <p><strong>¿Quieres ser parte de esta historia?</strong> <a href="/reservas-lanzadera-alien-nave-espacial/">Reserva tu experiencia</a> y vive la evolución de los escape rooms en Barcelona.</p>
    `,
    author: "The Resistance Room",
    date: "2026-02-01",
    category: "Historia"
  },
  {
    slug: "escape-rooms-team-building",
    title: "Escape Rooms: La Actividad Perfecta para Team Building",
    excerpt: "Descubre por qué cada vez más empresas eligen los escape rooms como actividad de team building y cómo pueden fortalecer tu equipo.",
    content: `
      <p>¿Buscas una actividad de team building que sea realmente efectiva y divertida? Los escape rooms se han convertido en una de las opciones favoritas de las empresas, y por buenas razones.</p>
      
      <h2>Por qué los escape rooms son ideales para team building</h2>
      
      <h3>1. Fomenta la comunicación real</h3>
      <p>A diferencia de las actividades tradicionales, un escape room requiere comunicación constante. Los equipos que se comunican efectivamente tienen un 60% más de probabilidades de escapar.</p>
      
      <h3>2. Revela fortalezas naturales</h3>
      <p>En un escape room, emergen líderes naturales, pensadores creativos, organizadores metódicos... Es una excelente oportunidad para ver a tu equipo en acción fuera del contexto laboral habitual.</p>
      
      <h3>3. Iguala el terreno de juego</h3>
      <p>El éxito en un escape room no depende de la jerarquía corporativa. El becario puede tener la idea brillante que salve al equipo. Esto ayuda a romper barreras organizacionales.</p>
      
      <h3>4. Gestión del tiempo bajo presión</h3>
      <p>Con solo 60 minutos en el reloj, los equipos aprenden a priorizar, tomar decisiones rápidas y gestionar el estrés colectivamente.</p>
      
      <h3>5. Resolución colaborativa de problemas</h3>
      <p>Los puzzles requieren diferentes habilidades: lógica, creatividad, observación, destreza manual. Nadie puede hacerlo todo solo, lo que refuerza el valor del trabajo en equipo.</p>
      
      <h2>Beneficios medibles del team building con escape rooms</h2>
      <ul>
        <li><strong>Mejora la comunicación:</strong> 89% de las empresas reportan mejor comunicación post-escape room</li>
        <li><strong>Aumenta la confianza:</strong> Los equipos aprenden a confiar en las habilidades de cada miembro</li>
        <li><strong>Reduce el estrés:</strong> La actividad lúdica reduce la tensión y mejora el ambiente laboral</li>
        <li><strong>Identifica líderes:</strong> Permite descubrir potencial de liderazgo en el equipo</li>
      </ul>
      
      <h2>Cómo maximizar el valor de team building</h2>
      
      <h3>Antes de la experiencia:</h3>
      <ul>
        <li>Define objetivos claros (¿qué quieres que tu equipo aprenda?)</li>
        <li>Mezcla departamentos o niveles jerárquicos para fomentar nuevas conexiones</li>
        <li>Anima a todos a participar activamente</li>
      </ul>
      
      <h3>Durante la experiencia:</h3>
      <ul>
        <li>Observa cómo interactúa tu equipo</li>
        <li>Toma nota de quién asume qué roles</li>
        <li>Disfruta viendo a tu equipo en un contexto diferente</li>
      </ul>
      
      <h3>Después de la experiencia:</h3>
      <ul>
        <li>Dedica tiempo a un debriefing</li>
        <li>Discute qué funcionó bien y qué se puede mejorar</li>
        <li>Conecta las lecciones aprendidas con situaciones laborales reales</li>
      </ul>
      
      <h2>The Resistance Room para equipos corporativos</h2>
      <p>En The Resistance Room, ofrecemos:</p>
      <ul>
        <li>Capacidad para grupos de hasta 9 personas por sala</li>
        <li>Posibilidad de reservar múltiples sesiones para equipos grandes</li>
        <li>Debriefing opcional enfocado en team building</li>
        <li>Horarios flexibles, incluyendo sesiones nocturnas</li>
        <li>Facilidades para eventos corporativos</li>
      </ul>
      
      <p><strong>¿Listo para fortalecer tu equipo?</strong> <a href="/contacto/">Contáctanos</a> para reservas corporativas y condiciones especiales.</p>
    `,
    author: "The Resistance Room",
    date: "2026-01-20",
    category: "Empresas"
  }
];

export const blogCategories = ["Todos", "Consejos", "Historia", "Empresas"];
