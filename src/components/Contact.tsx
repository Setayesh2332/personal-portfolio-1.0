function Contact() {
    return (
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name:" required />
          <input type="email" placeholder="Email:" required />
          <textarea rows={4} placeholder="Message:" required></textarea>
          <button type="submit" className="cv-btn-mobile">Send</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  