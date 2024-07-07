import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h1>Contact</h1>
      <div className="contact-icon">
        <a href="https://www.instagram.com" className="items">
          <FaInstagramSquare className="icons" />
        </a>
        <a href="https://www.facebook.com" className="items">
          <FaFacebookF className="icons" />
        </a>
        <a href="https://www.linkedin.com" className="items">
          <FaLinkedin className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
