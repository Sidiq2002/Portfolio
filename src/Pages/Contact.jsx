import "../StyleSheets/Contact.css";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-grid">
        <motion.div className="contact-info-panel" initial={{ x: -50 }} animate={{ x: 0 }}>
          <h1 className="contact-title">Let's <br /><span className="grad-text">Connect.</span></h1>
          <p className="contact-sub">Available for freelance or full-time opportunities.</p>
          
          <div className="contact-methods">
            <div className="method">
              <label>EMAIL</label>
              <a href="mailto:hajiabubakersidiq2002@gmail.com">hajiabubakersidiq2002@gmail.com</a>
            </div>
            <div className="method">
              <label>PHONE</label>
              <a href="tel:6379539528">+91 6379539528</a>
            </div>
          </div>
        </motion.div>

        <motion.div className="contact-form-panel" initial={{ x: 50 }} animate={{ x: 0 }}>
          <form className="glass-form">
            <div className="input-row">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input-row">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-row">
              <textarea placeholder="Tell me about your project"></textarea>
            </div>
            <button className="send-button">Send Message</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};