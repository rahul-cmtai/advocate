import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: number;
    longitude?: number;
  };
  image?: string;
  priceRange?: string;
  sameAs?: string[];
}

export const LocalBusinessStructuredData: React.FC<LocalBusinessProps> = ({
  name = 'Advocate Gauri Saraswat',
  description = 'Strategic legal solutions for modern businesses. Expert in contract law, fintech disputes, IBC litigation, and AI law.',
  url = 'https://www.decodelawwithgauri.com',
  telephone = '+919891324664',
  email = 'decodelawwithgauri@gmail.com',
  address = {
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN'
  },
  image = 'https://www.decodelawwithgauri.com/og-image.jpg',
  priceRange = '₹₹₹',
  sameAs = [
    'https://www.linkedin.com/in/gauri-saraswat',
    'https://www.instagram.com/decodelawwithgauri'
  ]
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name,
    description,
    url,
    telephone,
    email,
    image,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    sameAs
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbProps {
  items: Array<{
    name: string;
    item?: string;
  }>;
}

export const BreadcrumbStructuredData: React.FC<BreadcrumbProps> = ({ items }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface FAQProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQStructuredData: React.FC<FAQProps> = ({ questions }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default {
  LocalBusinessStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData
}; 