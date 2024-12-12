import React from 'react';
import './Styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <div className="contact__details">
        <p><strong>Phone:</strong> <a href="tel:+917994908388">+91 7994908388</a></p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:alis207702@gmail.com" aria-label="Send an email to alis207702@gmail.com">
            alis207702@gmail.com
          </a>
        </p>
        <p>
          <strong>Address:</strong> 
          53 Ushakirana Nilaya, Anjanadri Layout, 
           Achit Nagar PO, Thammanahalli, Bangalore
        </p>
      </div>
    </div>
  );
};

export default Contact;
