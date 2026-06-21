import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Website Development",
    description:
      "Professional, modern websites designed to represent your business and convert visitors into leads.",
  },
  {
    title: "Google Maps Integration",
    description:
      "Make it easier for customers to find your business location with seamless map integration.",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Allow customers to contact you instantly through WhatsApp for faster inquiries and support.",
  },
  {
    title: "Domain Setup",
    description:
      "Establish a professional business identity with proper domain configuration and setup.",
  },
  {
    title: "Maintenance",
    description:
      "Keep your website updated, secure, and running smoothly with ongoing maintenance support.",
  },
  {
    title: "Contact Forms",
    description:
      "Capture customer inquiries with integrated contact forms that push leads directly into your CRM.",
  },
];

function Services() {
  return (
    <section className="services-page">
      <div className="services-container">
        <h1>Our Services</h1>

        <p className="services-subtitle">
          Detailed digital solutions to help businesses build trust, improve
          visibility, and generate more inquiries.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>Ready to get started with professional digital solutions?</p>
          <Link to="/contact" className="btn-primary">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
