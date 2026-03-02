import { Link } from 'react-router-dom';
import siteSettings from '../../data/content/site-settings.json';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-slate-950 border-t-2 border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-slate-400">
              <p>📞 {siteSettings.contact.phone}</p>
              <p>✉️ {siteSettings.contact.email}</p>
              <p>📍 {siteSettings.contact.city}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces</h3>
            <div className="space-y-2">
              <Link to="/reservas-lanzadera-alien-nave-espacial" className="block text-slate-400 hover:text-green-400 transition-colors">
                Reservar
              </Link>
              <Link to="/precios" className="block text-slate-400 hover:text-green-400 transition-colors">
                Precios
              </Link>
              <Link to="/escaperoom_faq" className="block text-slate-400 hover:text-green-400 transition-colors">
                FAQ
              </Link>
              <Link to="/contacto" className="block text-slate-400 hover:text-green-400 transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Síguenos</h3>
            <div className="space-y-2 mb-4">
              <a
                href={siteSettings.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-green-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href={siteSettings.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-green-400 transition-colors"
              >
                Instagram
              </a>
            </div>
            <div className="space-y-2">
              <Link to="/terminos-y-condiciones" className="block text-slate-400 hover:text-green-400 transition-colors text-sm">
                Términos y Condiciones
              </Link>
              <Link to="/politica-de-cookies" className="block text-slate-400 hover:text-green-400 transition-colors text-sm">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} The Resistance Room. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
