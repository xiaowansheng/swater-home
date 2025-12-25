import { useEffect } from 'react';
import { useConfig } from '../context/ConfigContext';

export const SEOHead: React.FC = () => {
  const { config, currentContent, lang } = useConfig();

  useEffect(() => {
    if (!config || !currentContent) return;

    // Update document title
    document.title = config.seo.title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', config.seo.description);
    updateMetaTag('keywords', config.seo.keywords);
    updateMetaTag('author', currentContent.name);

    // Open Graph tags
    updateMetaTag('og:title', config.seo.title, true);
    updateMetaTag('og:description', config.seo.description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:locale', lang === 'zh' ? 'zh_CN' : 'en_US', true);
    
    // Twitter tags
    updateMetaTag('twitter:title', config.seo.title);
    updateMetaTag('twitter:description', config.seo.description);
    updateMetaTag('twitter:creator', currentContent.name);

    // Language
    document.documentElement.lang = lang;

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": currentContent.name,
      "alternateName": currentContent.nickname,
      "description": currentContent.bio,
      "jobTitle": currentContent.occupation,
      "url": window.location.origin,
      "sameAs": config.social.map(social => social.url),
      "knowsAbout": currentContent.skills
    };

    // Update or create structured data script
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [config, currentContent, lang]);

  return null;
};