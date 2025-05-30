// src/pages/Contact.jsx
import React from "react";
import "../styles/Pages.css";

function Contact() {
  return (
    <div className="page">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
