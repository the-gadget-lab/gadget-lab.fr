import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import MainNavbar from '../components/MainNavbar';
import "../styles/pages/Contact.scoped.scss";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState('');
  const [language, setLanguage] = useState('en'); // Default to English

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const preferredLanguage = browserLanguage.startsWith('fr') ? 'fr' : 'en';
    setLanguage(preferredLanguage);
  }, []);

  const translations = {
    en: {
      pageTitle: "CONTACT",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone (optional)",
      subjectLabel: "Subject (optional)",
      messageLabel: "Message",
      requiredError: "is required",
      sendingMessage: "Sending your message...",
      messageSent: "Your message has been sent. Thank you!",
      sendError: "There was an error sending your email. Please try again later.",
      sendButton: "Send",
      sendingButton: "Sending...",
    },
    fr: {
      pageTitle: "CONTACTEZ-NOUS",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone (facultatif)",
      subjectLabel: "Sujet (facultatif)",
      messageLabel: "Message",
      requiredError: "est requis",
      sendingMessage: "Envoi de votre message...",
      messageSent: "Votre message a été envoyé. Merci !",
      sendError: "Une erreur s'est produite lors de l'envoi de votre e-mail. Veuillez réessayer plus tard.",
      sendButton: "Envoyer",
      sendingButton: "Envoi...",
    },
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !name ? `${t.nameLabel} ${t.requiredError}` : null,
      email: !email ? `${t.emailLabel} ${t.requiredError}` : null,
      message: !message ? `${t.messageLabel} ${t.requiredError}` : null,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      subject: subject || t.pageTitle,
      message,
    };

    emailjs
      .send(
        window.REACT_APP_EMAILJS_SERVICE_ID,
        window.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        window.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setIsSending(false);
          setIsSent(true);
          setName('');
          setEmail('');
          setPhone('');
          setSubject('');
          setMessage('');
          setErrors({});
        },
        (error) => {
          setIsSending(false);
          setSendError(t.sendError);
        }
      );
  };

  return (
    <div className='contactContainer'>
      <MainNavbar />
      <div className='container'>
        <h1>{t.pageTitle}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t.nameLabel}</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">{t.emailLabel}</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">{t.phoneLabel}</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">{t.subjectLabel}</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t.messageLabel}</label>
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>
          {isSending && (
            <div className="alert alert-info" role="alert">
              {t.sendingMessage}
            </div>
          )}
          {isSent && (
            <div className="alert alert-success" role="alert">
              {t.messageSent}
            </div>
          )}
          {sendError && (
            <div className="alert alert-danger" role="alert">
              {sendError}
            </div>
          )}
          <div className="contactButtonContainer">
            <button type="submit" className="contactButton" disabled={isSending}>
              {isSending ? t.sendingButton : t.sendButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;