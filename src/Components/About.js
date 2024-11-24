import React, { useState } from "react";
import "./About.css";
import emailjs from "@emailjs/browser";

const About = () => {
  const [tripType, setTripType] = useState("one-way");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickLocation: "",
    dropLocation: "",
    days: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Required Fields
    const requiredFields = ["name", "phone", "email", "pickLocation", "dropLocation"];
    if (tripType === "round-trip") {
      requiredFields.push("days");
    }

    const isValid = requiredFields.every((field) => formData[field].trim() !== "");
    if (!isValid) {
      alert("Please fill out all required fields!");
      return;
    }

    // EmailJS configuration
    const serviceID = "service_8r3ziq6";
    const templateID = "template_fyn12bu";
    const publicKey = "8hu-Yeq3ssduS6tci";

    // Template parameters based on your EmailJS template
    const templateParams = {
      to_name: formData.name,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: `Pick Location: ${formData.pickLocation}, Drop Location: ${formData.dropLocation}`,
      pick_location: formData.pickLocation,
      drop_location: formData.dropLocation,
      days: formData.days || "N/A",
      trip_type: tripType,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert("Email sent successfully!");

        // Reset form fields
        setFormData({
          name: "",
          phone: "",
          email: "",
          pickLocation: "",
          dropLocation: "",
          days: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send email.", err);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="about-page" id="About">
      <div className="about-text">
        <h1>Welcome to Maara Travels</h1>
        <p>
          Welcome to CallTaxi, your trusted companion for safe, reliable, and
          comfortable rides across India. We are committed to providing
          top-notch services with a focus on convenience, affordability, and
          exceptional customer support.
        </p>
      </div>

      <div className="about-forms">
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="trip-selection">
            <button
              type="button"
              className={`trip-btn ${tripType === "one-way" ? "active" : ""}`}
              onClick={() => setTripType("one-way")}
            >
              One-Way Trip
            </button>
            <button
              type="button"
              className={`trip-btn ${tripType === "round-trip" ? "active" : ""}`}
              onClick={() => setTripType("round-trip")}
            >
              Round-Trip
            </button>
          </div>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="pickLocation">Pick Location:</label>
          <input
            type="text"
            id="pickLocation"
            name="pickLocation"
            placeholder="Pick Location"
            value={formData.pickLocation}
            onChange={handleChange}
            required
          />

          <label htmlFor="dropLocation">Drop Location:</label>
          <input
            type="text"
            id="dropLocation"
            name="dropLocation"
            placeholder="Drop Location"
            value={formData.dropLocation}
            onChange={handleChange}
            required
          />

          {tripType === "round-trip" && (
            <>
              <label htmlFor="days">Select Number of Days:</label>
              <input
                type="number"
                id="days"
                name="days"
                min="1"
                max="10"
                placeholder="Number of Days"
                value={formData.days}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit">Search Cab</button>
        </form>
      </div>

      {/* Sticky Contact Section */}
      <div className="quick-contact">
        <div className="contact-item">
          <i className="fa-solid fa-phone"></i>
          <span>
            <a href="tel:8248560018"> Call</a>
          </span>
        </div>
        <div className="contact-item">
          <i className="fa-brands fa-whatsapp"></i>
          <span>
            <a href="//api.whatsapp.com/send?phone=919566341883&text=Enquire_for_booking_a_taxi">
              {" "}
              WhatsApp
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
