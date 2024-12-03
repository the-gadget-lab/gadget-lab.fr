import React, { useEffect, useState } from 'react';

function JinJooContent() {
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      title: "Jin Joo",
      content:
        "Welcome to Jin Joo's corner! Here you can find the essence of traditional flavors combined with a modern twist. Join us on a culinary journey that celebrates the rich heritage and the future of gastronomy.",
    },
    fr: {
      title: "Jin Joo",
      content:
        "Bienvenue dans l'univers de Jin Joo ! Ici, vous découvrirez l'essence des saveurs traditionnelles mêlées à une touche de modernité. Embarquez pour un voyage culinaire qui célèbre l'héritage riche et l'avenir de la gastronomie.",
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

export default JinJooContent;
