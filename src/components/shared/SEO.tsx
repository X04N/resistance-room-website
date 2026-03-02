import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

export const SEO = ({ 
  title = 'The Resistance Room - Escape Room Barcelona',
  description = 'Escape Room en Barcelona. Únete a la resistencia humana y escapa de la lanzadera alienígena en 60 minutos. Experiencia inmersiva con tecnología Arduino. 2-9 jugadores.',
  keywords = 'escape room, Barcelona, escape room Barcelona, juegos de escape, aventura, team building, actividades Barcelona',
  image = 'https://www.resistanceroom.com/wp-content/uploads/photo-manipulation-1825450.jpg',
  url = 'https://www.resistanceroom.com',
  type = 'website',
  structuredData
}: SEOProps) => {
  const fullTitle = title === 'The Resistance Room - Escape Room Barcelona' 
    ? title 
    : `${title} | The Resistance Room`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="The Resistance Room" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="The Resistance Room" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
