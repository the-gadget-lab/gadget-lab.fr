import React, { useEffect, useState } from 'react';

function LokmanContent() {
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      title: "Lokman.fr",
      content:
        "Discover Lokman.fr, your gateway to a world of exclusive digital experiences. Dive into our portfolio of web design projects and explore the cutting-edge of online presence and user interface design.",
    },
    fr: {
      title: "Lokman.fr",
      content:
        "Découvrez Lokman.fr, votre porte d'entrée vers un monde d'expériences numériques exclusives. Plongez dans notre portfolio de projets de conception web et explorez les dernières avancées en matière de présence en ligne et de design d'interface utilisateur.",
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

export default LokmanContent;
