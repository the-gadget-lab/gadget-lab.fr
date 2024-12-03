import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "../styles/pages/Services.scoped.scss";
import MainNavbar from '../components/MainNavbar';
import www from '../assets/WWW-logo.png';
import ai from '../assets/AI-logo.png';

function ServicesPage() {
  // States to handle the toggle for each service card
  const [showWebFull, setShowWebFull] = useState(window.innerWidth > 750);
  const [showAIFull, setShowAIFull] = useState(window.innerWidth > 750);
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  // Translations for both English and French
  const translations = {
    en: {
      pageTitle: "SERVICES",
      webTitle: "Web Development",
      webSummary:
        "Dive into the future of web development with our specialized services. Leveraging the robust capabilities of React, Vue, and classic JavaScript, we deliver high-performance websites and applications designed to meet the modern demands of businesses and users alike.",
      webFullContent: [
        {
          title: "React Development:",
          text: "Immerse your users in a seamless experience with our React solutions. Known for its high efficiency and flexible architecture, React allows us to build dynamic user interfaces that are not only fast but also scalable, ensuring your website adapts to the changing needs of your business.",
        },
        {
          title: "Vue Development:",
          text: "Simplify and expedite your path to a compelling web presence with Vue. This progressive framework is the cornerstone of our approach to creating interactive and modern web applications that are both lightweight and powerful.",
        },
        {
          title: "JavaScript Mastery:",
          text: "Beyond the frameworks, our command over classic JavaScript enables us to refine every aspect of your website's functionality. From custom animations to interactive features, we ensure your website is as engaging as it is flawless.",
        },
      ],
      aiTitle: "AI Consulting and Development",
      aiSummary:
        "Step into the era of intelligent operations with our dedicated AI consulting services. As we craft the web of tomorrow with React, Vue, and JavaScript, we also pave the way for smarter business solutions through artificial intelligence.",
      aiFullContent: [
        {
          title: "Tailored AI Consulting:",
          text: "Our consulting revolves around understanding your business at its core, identifying processes that can be enhanced by AI, and strategizing the implementation of machine learning and data analytics to elevate your operations.",
        },
        {
          title: "Custom AI Strategy Development:",
          text: "We specialize in crafting bespoke AI strategies that align with your specific business objectives. Our approach ensures that AI solutions are not only innovative but also practical, enhancing decision-making and automating workflows.",
        },
      ],
      readMore: "Read More",
      showLess: "Show Less",
    },
    fr: {
      pageTitle: "SERVICES",
      webTitle: "Développement Web",
      webSummary:
        "Plongez dans l'avenir du développement web grâce à nos services spécialisés. En exploitant les capacités robustes de React, Vue et JavaScript classique, nous livrons des sites et des applications performants, conçus pour répondre aux exigences modernes des entreprises et des utilisateurs.",
      webFullContent: [
        {
          title: "Développement React :",
          text: "Offrez à vos utilisateurs une expérience fluide grâce à nos solutions React. Réputé pour son efficacité et son architecture flexible, React nous permet de créer des interfaces utilisateur dynamiques, rapides et évolutives.",
        },
        {
          title: "Développement Vue :",
          text: "Simplifiez et accélérez votre chemin vers une présence web captivante avec Vue. Ce framework progressif est la pierre angulaire de notre approche pour créer des applications web interactives et modernes.",
        },
        {
          title: "Maîtrise de JavaScript :",
          text: "Au-delà des frameworks, notre expertise en JavaScript classique nous permet de peaufiner chaque aspect des fonctionnalités de votre site. Animations personnalisées ou fonctionnalités interactives, nous garantissons un site engageant et impeccable.",
        },
      ],
      aiTitle: "Consultation et Développement en IA",
      aiSummary:
        "Entrez dans l'ère des opérations intelligentes avec nos services de consultation en intelligence artificielle. En développant le web de demain avec React, Vue et JavaScript, nous ouvrons également la voie à des solutions commerciales plus intelligentes grâce à l'IA.",
      aiFullContent: [
        {
          title: "Consultation IA sur mesure :",
          text: "Notre consultation consiste à comprendre les besoins de votre entreprise, à identifier les processus améliorables grâce à l'IA, et à mettre en œuvre des solutions d'analyse de données et d'apprentissage automatique.",
        },
        {
          title: "Développement de stratégies IA :",
          text: "Nous créons des stratégies IA personnalisées qui s'alignent sur vos objectifs commerciaux. Nos solutions pratiques et innovantes améliorent la prise de décision et automatisent les flux de travail.",
        },
      ],
      readMore: "Lire la suite",
      showLess: "Voir moins",
    },
  };

  const t = translations[language];

  // Check for window resize to adjust the visibility of content
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setShowWebFull(true);
        setShowAIFull(true);
      } else {
        setShowWebFull(false);
        setShowAIFull(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleWebContent = () => {
    setShowWebFull(!showWebFull);
  };

  const toggleAIContent = () => {
    setShowAIFull(!showAIFull);
  };

  return (
    <div className="services">
      <MainNavbar />
      <h1>{t.pageTitle}</h1>
      <div className="cards">
        <div className="serviceCard web">
          <img src={www} alt="Web Development" />
          <h2>{t.webTitle}</h2>
          <p>{t.webSummary}</p>
          {showWebFull && (
            <div className='servicesText'>
              {t.webFullContent.map((section, index) => (
                <p key={index}>
                  <span className='spanServices'>{section.title}</span> {section.text}
                </p>
              ))}
            </div>
          )}
          <button onClick={toggleWebContent}>
            {showWebFull ? t.showLess : t.readMore}
          </button>
        </div>

        <div className="serviceCard ia">
          <img src={ai} alt="AI Consulting and Development" />
          <h2>{t.aiTitle}</h2>
          <p>{t.aiSummary}</p>
          {showAIFull && (
            <div className='servicesText2'>
              {t.aiFullContent.map((section, index) => (
                <p key={index}>
                  <span className='spanServices'>{section.title}</span> {section.text}
                </p>
              ))}
            </div>
          )}
          <button onClick={toggleAIContent}>
            {showAIFull ? t.showLess : t.readMore}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;