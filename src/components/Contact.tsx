import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { Hand, MailCheck, Smile } from "lucide-react";
import { sendContactForm } from "../services/emailService";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [iconIndex, setIconIndex] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  // initialize EmailJS once
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_KEY!);
  }, []);

  const confirmationIcons: ReactNode[] = [
    <Hand size={56} key="hand" />, 
    <MailCheck size={56} key="mail" />, 
    <Smile size={56} key="smile" />,
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    sendContactForm(formRef.current)
      .then(() => {
        setIconIndex(Math.floor(Math.random() * confirmationIcons.length));
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setSubmitted(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">📩 Say Hello!</h2>
        <p className="contact-subtext">
          Drop me a message, and let’s create something awesome together!        
        </p>
             {submitted ? (
          <div className="success-message">
            <p>Thank you! Your message has been sent.</p>
            <span className="confirmation-icon">
              {confirmationIcons[iconIndex]}
            </span>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="contact-textarea"
              required
            />
            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        )}
      </div>

      <div className="doodle-squares">
        <div className="doodle-square contact-doodle1" />
        <div className="doodle-square contact-doodle2" />
        <div className="doodle-square contact-doodle3" />
        <div className="doodle-square contact-doodle4" />
      </div>
    </section>
  );
}
