import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'Advocate Gauri Saraswat – Legal Solutions for Visionaries',
  description = 'Strategic legal solutions for modern businesses. Expert in contract law, fintech disputes, IBC litigation, and AI law.',
  keywords = 'legal services, advocate, contract law, fintech disputes, IBC litigation, AI law, Gauri Saraswat',
  author = 'Advocate Gauri Saraswat',
  ogTitle = 'Advocate Gauri Saraswat – Legal Solutions for Visionaries',
  ogDescription = 'Strategic legal solutions for modern businesses. Expert in contract law, fintech disputes, IBC litigation, and AI law.',
  ogImage = 'https://www.decodelawwithgauri.com/og-image.jpg',
  ogUrl = 'https://www.decodelawwithgauri.com',
  twitterTitle = 'Advocate Gauri Saraswat – Legal Solutions for Visionaries',
  twitterDescription = 'Strategic legal solutions for modern businesses. Expert in contract law, fintech disputes, IBC litigation, and AI law.',
  twitterImage = 'https://www.decodelawwithgauri.com/twitter-image.jpg',
  canonicalUrl = 'https://www.decodelawwithgauri.com',
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  );
};

export default SEO; 