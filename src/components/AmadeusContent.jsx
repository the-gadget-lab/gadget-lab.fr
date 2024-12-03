import React, { useEffect, useState } from 'react';

function AmadeusContent() {
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      title: "Amadeus",
      content:
        "Explore Amadeus, where innovation meets travel technology. We provide comprehensive solutions that empower the global travel industry and enhance the travel experience. Get acquainted with our services and breakthroughs.",
    },
    fr: {
      title: "Amadeus",
      content:
        "Découvrez Amadeus, où l'innovation rencontre la technologie du voyage. Nous fournissons des solutions complètes qui renforcent l'industrie mondiale du voyage et améliorent l'expérience des voyageurs. Familiarisez-vous avec nos services et nos avancées.",
    },
  };

  const t = translations[language];

  return (
    <div>
      <h2>{t.title}</h2>
      <p>{t.content}</p>
    </div>
  );
}

export default AmadeusContent;
