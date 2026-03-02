/**
 * Structured Data (JSON-LD) generators for SEO
 * Follows Schema.org standards for better search engine understanding
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.resistanceroom.com/#organization",
  "name": "The Resistance Room",
  "alternateName": "Resistance Room Barcelona",
  "url": "https://www.resistanceroom.com",
  "logo": "https://www.resistanceroom.com/logo.png",
  "image": "https://www.resistanceroom.com/wp-content/uploads/photo-manipulation-1825450.jpg",
  "description": "Escape Room en Barcelona. Experiencia inmersiva de ciencia ficción post-apocalíptica con tecnología Arduino.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barcelona",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "addressCountry": "ES"
  },
  "telephone": "+34688905020",
  "email": "info@resistanceroom.com",
  "priceRange": "€€",
  "openingHours": [
    "Mo-Th 16:00-22:00",
    "Fr 16:00-00:00",
    "Sa 10:00-00:00",
    "Su 10:00-22:00"
  ],
  "sameAs": [
    "https://www.facebook.com/resistance_room",
    "https://www.instagram.com/resistance_room"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.resistanceroom.com/#website",
  "url": "https://www.resistanceroom.com",
  "name": "The Resistance Room",
  "description": "Escape Room Barcelona - The Resistance Room",
  "publisher": {
    "@id": "https://www.resistanceroom.com/#organization"
  },
  "inLanguage": "es-ES"
};

export const escapeRoomProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Escape de la Lanzadera Alienígena",
  "description": "Escape Room de ciencia ficción en Barcelona. 60 minutos para escapar de una nave alienígena. 2-9 jugadores. Experiencia inmersiva con tecnología Arduino.",
  "image": "https://www.resistanceroom.com/wp-content/uploads/photo-manipulation-1825450.jpg",
  "brand": {
    "@type": "Brand",
    "name": "The Resistance Room"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.resistanceroom.com/precios/",
    "priceCurrency": "EUR",
    "lowPrice": "90",
    "highPrice": "225",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://www.resistanceroom.com/#organization"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqPageSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const blogPostSchema = (post: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.description,
  "image": post.image || "https://www.resistanceroom.com/wp-content/uploads/photo-manipulation-1825450.jpg",
  "author": {
    "@type": "Organization",
    "name": post.author,
    "@id": "https://www.resistanceroom.com/#organization"
  },
  "publisher": {
    "@type": "Organization",
    "name": "The Resistance Room",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.resistanceroom.com/logo.png"
    }
  },
  "datePublished": post.datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.url
  },
  "inLanguage": "es-ES"
});
