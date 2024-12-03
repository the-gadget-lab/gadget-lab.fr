import React, { useState, useEffect } from 'react';
import MainNavbar from '../components/MainNavbar';
import "../styles/pages/Team.scoped.scss";
import lancelot from "../assets/portrait-lancelot.jpg";
import lokman from "../assets/pp-placeholder.jpg";

function OurTeamPage() {
  const [showFullLancelot, setShowFullLancelot] = useState(window.innerWidth > 750);
  const [showFullLokman, setShowFullLokman] = useState(window.innerWidth > 750);
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      pageTitle: "OUR TEAM",
      lancelotName: "Lancelot CARRAU",
      lancelotBio:
        "Hello! I'm Lancelot, a globe-trotting web developer. From living on a boat to immersing myself in Japan's tech culture, I bring a world of experience to digital solutions. One year into professional web development, I'm dedicated to crafting sites that navigate as smoothly as my adventures across the seas.",
      lokmanName: "Lokman RAMDANI",
      lokmanBio:
        "Hello! I'm Lokman, a web developer with a zest for digital art and technology. At 22, after a literary baccalaureate in Montpellier and a language course in Tokyo, I dove into web development, freelanced as a digital illustrator, and worked on various web projects using React.js and Vue.js. My adventures led me to co-found Gadget Lab. When I'm not coding or sketching, I'm sharing my passion on social media or exploring new destinations. Join me at Gadget Lab, where creativity meets innovation.",
      readBio: "Read Bio",
      showLess: "Show Less",
    },
    fr: {
      pageTitle: "NOTRE ÉQUIPE",
      lancelotName: "Lancelot CARRAU",
      lancelotBio:
        "Bonjour ! Je suis Lancelot, un développeur web globe-trotteur. De ma vie sur un bateau à mon immersion dans la culture technologique japonaise, j'apporte une expérience mondiale aux solutions numériques. Avec une année dans le développement web professionnel, je suis dédié à la création de sites qui naviguent aussi bien que mes aventures à travers les mers.",
      lokmanName: "Lokman RAMDANI",
      lokmanBio:
        "Bonjour ! Je suis Lokman, un développeur web passionné par l'art numérique et la technologie. À 22 ans, après un baccalauréat littéraire à Montpellier et un cours de langue à Tokyo, je me suis lancé dans le développement web, ai travaillé en tant qu'illustrateur numérique freelance, et ai réalisé divers projets web avec React.js et Vue.js. Mes aventures m'ont conduit à co-fonder Gadget Lab. Quand je ne code pas ou ne dessine pas, je partage ma passion sur les réseaux sociaux ou explore de nouvelles destinations. Rejoignez-moi à Gadget Lab, où créativité et innovation se rencontrent.",
      readBio: "Lire la Bio",
      showLess: "Voir Moins",
    },
  };

  const t = translations[language]; // Select translations for current language

  // Toggle functions for each team member
  const toggleLancelotContent = () => {
    setShowFullLancelot(!showFullLancelot);
  };

  const toggleLokmanContent = () => {
    setShowFullLokman(!showFullLokman);
  };

  return (
    <div className='teamContainer'>
      <MainNavbar />
      <h1>{t.pageTitle}</h1>
      <div className='teamCardsContainer'>
        <div className="lancelot">
          <img src={lancelot} alt="portrait-Lancelot" className='imgProfile' />
          <div className='text'>
            <h3>{t.lancelotName}</h3>
            {showFullLancelot && <p>{t.lancelotBio}</p>}
            <button
              onClick={toggleLancelotContent}
              className={showFullLancelot ? 'show-less' : 'read-more'}
            >
              {showFullLancelot ? t.showLess : t.readBio}
            </button>
          </div>
        </div>
        <div className="lokman">
          <div className='text'>
            <h3>{t.lokmanName}</h3>
            <p>{t.lokmanBio}</p>
          </div>
          <img src={lokman} alt="portrait-Lokman" className='imgProfile' />
        </div>
      </div>
    </div>
  );
}

export default OurTeamPage;