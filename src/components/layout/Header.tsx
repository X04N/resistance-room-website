import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-card">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white">
            The Resistance Room
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link to="/reservas-lanzadera-alien-nave-espacial" className="text-slate-300 hover:text-white transition-colors">
              Reservar
            </Link>
            <Link to="/precios" className="text-slate-300 hover:text-white transition-colors">
              Precios
            </Link>
            <Link to="/que-es-un-escape-room-2" className="text-slate-300 hover:text-white transition-colors">
              ¿Qué es un Escape Room?
            </Link>
            <Link to="/escaperoom_faq" className="text-slate-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/contacto" className="text-slate-300 hover:text-white transition-colors">
              Contacto
            </Link>
            <Link to="/blog" className="text-slate-300 hover:text-white transition-colors">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className="block text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/reservas-lanzadera-alien-nave-espacial"
              className="block text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservar
            </Link>
            <Link
              to="/precios"
              className="block text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </Link>
            <Link
              to="/que-es-un-escape-room-2"
              className="block text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Qué es un Escape Room?
            </Link>
            <Link
              to="/escaperoom_faq"
              className="block text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contacto"
              className="block text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              to="/blog"
              className="block text-slate-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
