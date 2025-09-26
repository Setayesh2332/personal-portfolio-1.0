import { useEffect, useRef, useState, type ComponentType, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { sendContactForm } from "../services/emailService";
import "./Contact.css";

type IconComponent = ComponentType<{ size?: number }>;

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  Icon: IconComponent;
};

type SocialLink = {
  label: string;
  href: string;
  Icon: IconComponent;
};

const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: "setayesh2332@gmail.com",
    href: "mailto:setayesh2332@gmail.com",
    Icon: Mail,
  },
  {
    label: "Location",
    value: "Montreal, Canada",
    Icon: MapPin,
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/setayesh-abbasi-moghadam/",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Setayesh2332",
    Icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:setayesh2332@gmail.com",
    Icon: FaEnvelope,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_KEY!);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    sendContactForm(formRef.current)
      .then(() => {
        setSubmitted(true);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setSubmitted(false);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-form-card">
          <div className="form-card-header">
            <span className="contact-tag">Contact</span>
            <h2>Let's talk </h2>
            <p>
              I'll get back to you within a couple of business days.
            </p>
          </div>

          {submitted ? (
            <div className="success-message" role="status" aria-live="polite">
              <span className="success-message-icon">
                <CheckCircle2 size={40} aria-hidden="true" />
              </span>
              <h3>Message sent!</h3>
              <p>
                Thanks for reaching out. I&apos;ll review your note and respond
                soon.
              </p>
              <button
                type="button"
                className="send-btn"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="contact-input"
                  autoComplete="name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="contact-input"
                  autoComplete="email"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="contact-input"
                autoComplete="off"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                className="contact-textarea"
                rows={6}
                required
              />
              <button type="submit" className="send-btn" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="contact-details-card">
          <div className="contact-details-intro">
            <h3>Contact Information</h3>
            <p>
              Always open to having a friendly chat about technology and design.
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="contact-details-list">
            {contactDetails.map(({ label, value, href, Icon }) => {
              const DetailIcon = Icon;
              return (
                <div className="contact-detail" key={label}>
                  <span className="contact-detail-icon">
                    <DetailIcon size={22} aria-hidden="true" />
                  </span>
                  <div className="contact-detail-content">
                    <span>{label}</span>
                    {href ? (
                      <a href={href}>{value}</a>
                    ) : (
                      <p>{value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="contact-follow">
            <h4>Follow Me</h4>
            <div className="contact-socials">
              {socialLinks.map(({ label, href, Icon }) => {
                const SocialIcon = Icon;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${label}`}
                  >
                    <SocialIcon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="availability-card">
            <span className="availability-dot" aria-hidden="true" />
            <div>
              <h4>Available for internship</h4>
              <p>
                I&apos;m currently seeking internship or summer opportunities. Let&apos;s discuss how I can contribute to your team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}