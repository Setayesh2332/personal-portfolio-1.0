import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("Error: " + error));
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      {submitted ? (
        <p className="success-message">Thank you! Your message has been sent. 😊</p>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name:" required />
          <input type="email" name="email" placeholder="Email:" required />
          <textarea name="message" rows={4} placeholder="Message:" required></textarea>
          <button type="submit" className="cv-btn-mobile">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;


/*function Contact() {
    return (
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <form name="contact" method="POST" data-netlify="true" className="contact-form">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name:" required />
          <input type="email" name="email" placeholder="Email:" required />
          <textarea name="message" rows={4} placeholder="Message:" required></textarea>
          <button type="submit" className="cv-btn-mobile">Send</button>
        </form>
      </section>
    );
  }
  
  export default Contact; 
  */