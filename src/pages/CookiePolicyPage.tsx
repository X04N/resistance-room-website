export const CookiePolicyPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Política de Cookies
          </h1>
          <p className="text-gray-400">
            Última actualización: Marzo 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">¿Qué son las cookies?</h2>
            <p className="text-gray-300 mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
              Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionen información a los propietarios del sitio.
            </p>
            <p className="text-gray-300">
              En The Resistance Room, utilizamos cookies para mejorar tu experiencia en nuestro sitio web y entender cómo los visitantes interactúan con nuestro contenido.
            </p>
          </div>

          {/* Types of Cookies */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">Cookies que utilizamos</h2>
            
            <div className="space-y-6">
              {/* Necessary */}
              <div>
                <h3 className="text-xl font-semibold text-green-500 mb-2">1. Cookies Necesarias</h3>
                <p className="text-gray-300 mb-3">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar en nuestros sistemas.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead className="border-b border-gray-700">
                      <tr>
                        <th className="text-left text-white py-2">Nombre</th>
                        <th className="text-left text-white py-2">Propósito</th>
                        <th className="text-left text-white py-2">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-gray-300 py-2 font-mono text-xs">cookie_consent</td>
                        <td className="text-gray-300 py-2">Almacena tu preferencia de cookies</td>
                        <td className="text-gray-300 py-2">1 año</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics */}
              <div>
                <h3 className="text-xl font-semibold text-green-500 mb-2">2. Cookies Analíticas</h3>
                <p className="text-gray-300 mb-3">
                  Estas cookies nos permiten contar visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio. 
                  <strong className="text-white"> Solo se activan si das tu consentimiento.</strong>
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <table className="w-full text-sm">
                    <thead className="border-b border-gray-700">
                      <tr>
                        <th className="text-left text-white py-2">Nombre</th>
                        <th className="text-left text-white py-2">Propósito</th>
                        <th className="text-left text-white py-2">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-gray-300 py-2 font-mono text-xs">_ga</td>
                        <td className="text-gray-300 py-2">Distingue usuarios únicos (Google Analytics)</td>
                        <td className="text-gray-300 py-2">2 años</td>
                      </tr>
                      <tr>
                        <td className="text-gray-300 py-2 font-mono text-xs">_ga_*</td>
                        <td className="text-gray-300 py-2">Mantiene el estado de la sesión (Google Analytics)</td>
                        <td className="text-gray-300 py-2">2 años</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  Nota: Google Analytics está configurado con <code className="bg-slate-800 px-2 py-1 rounded">anonymize_ip: true</code> para proteger tu privacidad.
                </p>
              </div>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">Gestión de cookies</h2>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cambiar tus preferencias</h3>
                <p>
                  Puedes cambiar tus preferencias de cookies en cualquier momento eliminando el almacenamiento local de tu navegador 
                  o configurando tu navegador para bloquear cookies. Ten en cuenta que algunas funciones del sitio web pueden no funcionar correctamente si deshabilitas las cookies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cookies de terceros</h3>
                <p>
                  Utilizamos Google Analytics, un servicio de análisis web proporcionado por Google, Inc. ("Google"). 
                  Google Analytics utiliza cookies para ayudarnos a analizar cómo los usuarios utilizan el sitio web.
                </p>
                <p className="mt-2">
                  Para más información sobre cómo Google utiliza los datos, visita{' '}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 underline"
                  >
                    la Política de Privacidad de Google
                  </a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Navegadores</h3>
                <p className="mb-2">
                  La mayoría de los navegadores web permiten controlar las cookies a través de la configuración. 
                  Para obtener más información sobre cómo gestionar las cookies en tu navegador:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">Safari</a></li>
                  <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">Microsoft Edge</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">Base legal</h2>
            <p className="text-gray-300 mb-4">
              El uso de cookies en este sitio web cumple con la Directiva ePrivacy de la UE (Directiva 2002/58/EC) 
              y el Reglamento General de Protección de Datos (RGPD).
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Las cookies necesarias se basan en nuestro <strong className="text-white">interés legítimo</strong> en proporcionar un sitio web funcional.</li>
              <li>Las cookies analíticas se basan en tu <strong className="text-white">consentimiento explícito</strong>, que puedes retirar en cualquier momento.</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl border border-green-500/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
            <p className="text-gray-300 mb-4">
              Si tienes preguntas sobre nuestra Política de Cookies, contáctanos:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-white">Email:</strong> info@resistanceroom.com</p>
              <p><strong className="text-white">Teléfono:</strong> 688 90 50 20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
