export const TermsPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Términos y Condiciones
          </h1>
          <p className="text-gray-400">
            Última actualización: Marzo 2026
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los términos</h2>
            <p className="text-gray-300">
              Al acceder y utilizar el sitio web de The Resistance Room y/o realizar una reserva de nuestros servicios, 
              aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, 
              no debes utilizar nuestro sitio web ni nuestros servicios.
            </p>
          </div>

          {/* Reservations */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">2. Reservas</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.1. Proceso de reserva</h3>
                <p>
                  Las reservas se realizan a través de nuestro sistema de reservas online o por teléfono. 
                  Una vez confirmada y pagada, recibirás un email de confirmación con los detalles de tu reserva.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.2. Pago</h3>
                <p>
                  El pago completo se requiere en el momento de la reserva. Aceptamos tarjeta de crédito/débito, 
                  PayPal y transferencia bancaria a través de nuestra plataforma de pago segura.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2.3. Modificaciones</h3>
                <p>
                  Puedes modificar tu reserva (fecha, hora o número de jugadores) hasta 24 horas antes de la sesión 
                  sin coste adicional, sujeto a disponibilidad.
                </p>
              </div>
            </div>
          </div>

          {/* Cancellation */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">3. Política de cancelación</h2>
            <div className="space-y-3 text-gray-300">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="font-semibold text-white mb-2">Cancelación con más de 24 horas de antelación:</p>
                <p>Reembolso completo del 100% del importe pagado.</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="font-semibold text-white mb-2">Cancelación con menos de 24 horas de antelación:</p>
                <p>No se realizará reembolso. Podrás reprogramar la sesión por única vez, sujeto a disponibilidad.</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="font-semibold text-white mb-2">No presentarse (No-show):</p>
                <p>No se realizará reembolso ni se permitirá reprogramar.</p>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">4. Normas de participación</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4.1. Edad mínima</h3>
                <p>
                  Los menores de 16 años deben ir acompañados de un adulto responsable mayor de 18 años en todo momento.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4.2. Llegada</h3>
                <p>
                  Debes llegar 10 minutos antes de tu hora reservada. Los retrasos de más de 15 minutos pueden resultar 
                  en la pérdida de tu sesión sin derecho a reembolso.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4.3. Comportamiento</h3>
                <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                  <li>No está permitido el consumo de alcohol o drogas antes o durante la experiencia.</li>
                  <li>Prohibido fumar dentro de las instalaciones.</li>
                  <li>Está prohibido el uso de fuerza excesiva con los elementos de la sala.</li>
                  <li>No se permite hacer fotos o vídeos dentro de la sala durante el juego.</li>
                  <li>Sigue siempre las instrucciones del Game Master.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">4.4. Derecho de admisión</h3>
                <p>
                  Nos reservamos el derecho de admisión y de expulsar a cualquier participante que no cumpla con estas normas 
                  o cuyo comportamiento sea inapropiado, sin derecho a reembolso.
                </p>
              </div>
            </div>
          </div>

          {/* Liability */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">5. Responsabilidad y seguridad</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">5.1. Asunción de riesgo</h3>
                <p>
                  Al participar en la experiencia, aceptas que existe un riesgo mínimo inherente a cualquier actividad física. 
                  The Resistance Room mantiene sus instalaciones en condiciones seguras y proporciona instrucciones de seguridad antes de cada sesión.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">5.2. Limitación de responsabilidad</h3>
                <p>
                  The Resistance Room no se hace responsable de lesiones o daños a la propiedad personal causados por el incumplimiento 
                  de las normas de seguridad o el comportamiento negligente de los participantes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">5.3. Condiciones de salud</h3>
                <p>
                  Si tienes alguna condición médica que pueda verse afectada por la participación (problemas cardíacos, claustrofobia severa, 
                  epilepsia, embarazo, etc.), debes informar al personal antes de comenzar la experiencia. Participa bajo tu propia responsabilidad.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">5.4. Salida de emergencia</h3>
                <p>
                  Puedes salir de la sala en cualquier momento por cualquier razón. Las salidas de emergencia están claramente señalizadas.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">6. Privacidad y uso de imágenes</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">6.1. Protección de datos</h3>
                <p>
                  Tus datos personales serán tratados de acuerdo con el Reglamento General de Protección de Datos (RGPD). 
                  Solo utilizamos tu información para procesar tu reserva y comunicarnos contigo sobre tu experiencia.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">6.2. Fotografías y vídeos</h3>
                <p>
                  Tomamos fotografías y vídeos durante tu experiencia que te serán enviados después. 
                  Al participar, consientes que estas imágenes puedan ser utilizadas con fines promocionales en nuestro sitio web 
                  y redes sociales. Si no deseas aparecer en material promocional, infórmanos antes de la sesión.
                </p>
              </div>
            </div>
          </div>

          {/* Gift Vouchers */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">7. Bonos regalo</h2>
            <div className="space-y-3 text-gray-300">
              <p>Los bonos regalo son válidos durante 12 meses desde la fecha de compra.</p>
              <p>Los bonos regalo no son reembolsables ni canjeables por dinero en efectivo.</p>
              <p>Los bonos deben ser reservados con antelación, sujeto a disponibilidad.</p>
              <p>Los bonos regalo perdidos o robados no serán reemplazados.</p>
            </div>
          </div>

          {/* Changes */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">8. Modificaciones</h2>
            <p className="text-gray-300">
              The Resistance Room se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. 
              Los cambios serán efectivos inmediatamente tras su publicación en el sitio web. 
              Es tu responsabilidad revisar estos términos periódicamente.
            </p>
          </div>

          {/* Force Majeure */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">9. Fuerza mayor</h2>
            <p className="text-gray-300">
              The Resistance Room no será responsable por el incumplimiento de sus obligaciones debido a circunstancias fuera de su control 
              (desastres naturales, pandemias, cortes de energía, etc.). En tales casos, trabajaremos contigo para reprogramar tu sesión 
              o ofrecer un reembolso completo.
            </p>
          </div>

          {/* Applicable Law */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">10. Ley aplicable</h2>
            <p className="text-gray-300">
              Estos Términos y Condiciones se rigen por las leyes de España. 
              Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Barcelona, España.
            </p>
          </div>

          {/* Contact */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
            <p className="text-gray-300 mb-4">
              Si tienes preguntas sobre estos Términos y Condiciones, contáctanos:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-white">Email:</strong> info@resistanceroom.com</p>
              <p><strong className="text-white">Teléfono:</strong> 688 90 50 20</p>
              <p><strong className="text-white">Ubicación:</strong> Barcelona, España</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
