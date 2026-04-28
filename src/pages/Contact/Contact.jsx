import "./Contact.css"
import {FaEnvelope, FaPhone, FaMapMarkerAlt} from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-desc">
            Feel free to reach out for collaborations, projects, or just a friendly chat.
      </div>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          
          <div className="info-header">
            Get in touch 🤝
          </div>
          
           <div className="info-card">
            <div className="icon-box">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div>
              <h5>Visit my Country</h5>
              <p>India, Karnataka</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <i className="bi bi-envelope"></i>
            </div>
            <div>
              <h5>Here's my mail</h5>
              <p>arunib432@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <i className="bi bi-telephone"></i>
            </div>
            <div>
              <h5>My number</h5>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">

          <div className="form-header">
            Got a message for me? ✉️
          </div>

          <form>
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            
            <textarea placeholder="Your Message" rows="5" required />

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;