import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { BookingPage } from './pages/BookingPage'
import { PricesPage } from './pages/PricesPage'
import { WhatIsEscapeRoomPage } from './pages/WhatIsEscapeRoomPage'
import { FAQPage } from './pages/FAQPage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { TermsPage } from './pages/TermsPage'
import { CookiePolicyPage } from './pages/CookiePolicyPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservas-lanzadera-alien-nave-espacial/" element={<BookingPage />} />
        <Route path="/precios/" element={<PricesPage />} />
        <Route path="/que-es-un-escape-room-2/" element={<WhatIsEscapeRoomPage />} />
        <Route path="/escaperoom_faq/" element={<FAQPage />} />
        <Route path="/contacto/" element={<ContactPage />} />
        <Route path="/blog/" element={<BlogPage />} />
        <Route path="/terminos-y-condiciones/" element={<TermsPage />} />
        <Route path="/politica-de-cookies/" element={<CookiePolicyPage />} />
        {/* Blog post routes - specific slugs to avoid catching /admin */}
        <Route path="/consejos-para-tu-primer-escape-room/" element={<BlogPostPage />} />
        <Route path="/historia-escape-rooms/" element={<BlogPostPage />} />
        <Route path="/escape-rooms-team-building/" element={<BlogPostPage />} />
      </Routes>
    </Layout>
  )
}

export default App
