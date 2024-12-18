import React, { useState, useEffect } from 'react';
import '../styles/pages/Portfolio.scoped.scss';
import MainNavbar from '../components/MainNavbar';
import JinJooContent from '../components/JinJooContent';
import LokmanContent from '../components/LokmanContent';
import AmadeusContent from '../components/AmadeusContent';
import AttoChannelContent from '../components/AttoChannelContent';
import BBContent from '../components/BBContent';
import jinJooImg from '../assets/port-jinjoo.jpg';
import BBImg from '../assets/BB_img.png';
import lokmanImg from '../assets/port-lokman.jpg';
import amadeusImg from '../assets/port-amadeus.jpg';
import attochannelNavimg from '../assets/nav-port-attochannel.jpg';
import jinJooNavImg from '../assets/nav-port-jinjoo.jpg';
import lokmanNavImg from '../assets/nav-port-lokman.jpg';
import amadeusNavImg from '../assets/nav-port-amadeus.jpg';
import BBNavImg from '../assets/BB-nav.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('jinjoo');
  const [language, setLanguage] = useState('en'); // Default to English

  // Language detection
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      title: "PORTFOLIO",
      jinjooAlt: "Jin Joo",
      lokmanAlt: "Lokman",
      amadeusAlt: "Amadeus",
      attochannelAlt: "@channel",
      BBAlt: "Beau & Bun",
    },
    fr: {
      title: "PORTFOLIO",
      jinjooAlt: "Jin Joo",
      lokmanAlt: "Lokman",
      amadeusAlt: "Amadeus",
      attochannelAlt: "@channel",
      BBAlt: "Beau & Bun",
    },
  };

  const t = translations[language];

  const getActiveImage = () => {
    switch (activeTab) {
      case 'jinjoo':
        return jinJooImg;
      case 'lokman':
        return lokmanImg;
      case 'amadeus':
        return amadeusImg;
      case 'attochannel':
        return attochannelNavimg;
      case 'BB':
        return BBImg;
      default:
        return jinJooImg;
    }
  };

  const items = [
    { id: 'jinjoo', alt: t.jinjooAlt },
    { id: 'lokman', alt: t.lokmanAlt },
    { id: 'amadeus', alt: t.amadeusAlt },
    { id: 'attochannel', alt: t.attochannelAlt },
    { id: 'BB', alt: t.BBAlt },
  ];

  const handleItemClick = (itemId) => {
    setActiveTab(itemId);
  };

  const CustomCarouselItem = ({ item }) => (
    <Col>
      <Card
        style={{ cursor: 'pointer' }}
        onClick={() => handleItemClick(item.id)}
      >
        <Card.Img
          src={
            item.id === 'jinjoo'
              ? jinJooNavImg
              : item.id === 'lokman'
              ? lokmanNavImg
              : item.id === 'amadeus'
              ? amadeusNavImg
              : item.id === 'attochannel'
              ? attochannelNavimg
              : BBNavImg
          }
          alt={item.alt}
        />
      </Card>
    </Col>
  );

  return (
    <div className='portfolioContainer'>
      <MainNavbar />
      <h1 className="portfolioTitle">{t.title}</h1>
      <div className="portfolioWrapper">
        <div className="portfolioNav">
          <Container>
            <Row>
              <Col>
                <Carousel
                  interval={null}
                  activeIndex={items.findIndex((item) => item.id === activeTab)}
                  onSelect={(index) => setActiveTab(items[index].id)}
                >
                  {items.map((item, index) => (
                    <Carousel.Item key={item.id}>
                      <Row>
                        <CustomCarouselItem item={item} />
                        <CustomCarouselItem
                          item={items[(index + 1) % items.length]}
                        />
                        <CustomCarouselItem
                          item={items[(index + 2) % items.length]}
                        />
                      </Row>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="portfolioContentArea">
          <div className="portfolioImage">
            <img src={getActiveImage()} alt="Tab Content" />
          </div>
          <div className="portfolioContent">
            {activeTab === 'jinjoo' && <JinJooContent />}
            {activeTab === 'lokman' && <LokmanContent />}
            {activeTab === 'amadeus' && <AmadeusContent />}
            {activeTab === 'attochannel' && <AttoChannelContent />}
            {activeTab === 'BB' && <BBContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;