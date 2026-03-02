import { Hero } from '../components/home/Hero';
import { Experience } from '../components/home/Experience';
import { Pricing } from '../components/home/Pricing';
import { CTA } from '../components/home/CTA';
import { SEO } from '../components/shared/SEO';
import { organizationSchema, websiteSchema, escapeRoomProductSchema } from '../utils/structuredData';

export const HomePage = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, escapeRoomProductSchema]
  };

  return (
    <>
      <SEO 
        structuredData={combinedSchema}
      />
      <Hero />
      <Experience />
      <Pricing />
      <CTA />
    </>
  );
};
