import React, { useEffect, useState } from 'react';

function BBContent() {
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      title: "beau-bun.fr",
      content:
        "Welcome to Beau et Bun, where traditional Vietnamese cuisine meets contemporary flair. Explore our signature dishes - Bun, Com, and Rolls, each a vibrant celebration of Vietnam's culinary heritage, reimagined for the modern palate. Discover our fresh rolls, the latest addition to our carefully crafted menu. Experience the essence of Vietnam in every bite at Beau et Bun.",
    },
    fr: {
      title: "beau-bun.fr",
      content:
        "Bienvenue chez Beau et Bun, où la cuisine vietnamienne traditionnelle rencontre une touche contemporaine. Découvrez nos plats emblématiques - Bun, Com et Rolls, chacun célébrant avec éclat l'héritage culinaire du Vietnam, réimaginé pour les palais modernes. Explorez nos rouleaux frais, la dernière addition à notre menu soigneusement élaboré. Vivez l'essence du Vietnam dans chaque bouchée chez Beau et Bun.",
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

export default BBContent;
