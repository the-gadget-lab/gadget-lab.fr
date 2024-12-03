import React, { useEffect, useState } from 'react';

function AttoChannelContent() {
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      title: "@channel",
      content:
        "Discover @channel, your gateway to seamless communication and collaboration. Empower your teams with tools designed to enhance productivity and foster innovation. Dive into our features and transform the way you work.",
    },
    fr: {
      title: "@channel",
      content:
        "Découvrez @channel, votre porte d'entrée vers une communication et une collaboration fluides. Offrez à vos équipes des outils conçus pour améliorer la productivité et favoriser l'innovation. Explorez nos fonctionnalités et transformez votre façon de travailler.",
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

export default AttoChannelContent;
