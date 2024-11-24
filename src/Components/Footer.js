import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const serviceID = "service_8r3ziq6";
  const templateID = "template_fyn12bu";
  const publicKey = "8hu-Yeq3ssduS6tci";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert("Email sent successfully!");
        console.log(
          "Email sent successfully: ",
          response.status,
          response.text
        );
        // Reset form fields
        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email: ", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <footer className="footer-container" id="Footer">
      <div className="footer-top">
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#Destination">Services</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#Footer">Contact</a></li>
            <li><a href="#header">FAQ</a></li>
          </ul>
        </div>
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Request Quote</button>
          </form>
        </div>
      </div>

      {/* Bottom Division */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved Maara Travels.</p>
      </div>
    </footer>
  );
};

export default Footer;
