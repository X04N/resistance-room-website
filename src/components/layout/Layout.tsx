import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { useGoogleAnalytics } from '../../hooks/useGoogleAnalytics';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useGoogleAnalytics();  // Tracks page views on route changes

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
