import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { sendContactForm } from "../services/emailService";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // initialize EmailJS once
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_KEY!);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    sendContactForm(formRef.current)
      .then(() => setSubmitted(true))
      .catch((err) => {
        console.error("Error sending email:", err);
        setSubmitted(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>

      {submitted ? (
        <p className="success-message">
          Thank you! Your message has been sent. 😊
        </p>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Name:"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email:"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message:"
            required
          />
          <button type="submit" className="cv-btn-mobile">
            Send
          </button>
        </form>
      )}
    </section>
  );
}
