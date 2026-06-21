import { useState } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import "./Contact.css";

const industries = [
  "Clinic",
  "Hospital",
  "School",
  "Coaching Center",
  "Builder",
  "Chartered Accountant",
  "Architect",
  "Interior Designer",
  "Gym",
  "Salon",
  "Other",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    city: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you shortly.");
    setFormData({
      name: "",
      phone: "",
      businessName: "",
      city: "",
      industry: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          Ready to bring your business online? Get in touch with us today.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h2>Phone</h2>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="info-card">
              <FaWhatsapp className="info-icon" />
              <h2>WhatsApp</h2>
              <p>+91 XXXXX XXXXX</p>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h2>Email</h2>
              <p>hello@elvatech.in</p>
            </div>

            <div className="info-card">
              <FaGlobe className="info-icon" />
              <h2>Website</h2>
              <p>web.elvatech.in</p>
            </div>

            <div className="map-placeholder">
              <p>Google Maps Location</p>
              <span>Map integration coming soon</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get Free Consultation</h2>
            <p className="form-desc">
              Fill in your details and we&apos;ll get back to you shortly.
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="businessName"
              placeholder="Business Name *"
              value={formData.businessName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              <option value="">Select Industry *</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your requirements (optional)"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
