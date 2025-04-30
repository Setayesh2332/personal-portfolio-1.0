function Contact() {
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
  