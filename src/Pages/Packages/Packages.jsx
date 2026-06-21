import { Link } from "react-router-dom";
import "./Packages.css";

const packages = [
  {
    name: "Starter Package",
    features: [
      "Professional Website",
      "Mobile Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
    ],
    highlighted: false,
  },
  {
    name: "Growth Package",
    features: [
      "Everything in Starter",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Up to 5 Pages",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Premium Package",
    features: [
      "Everything in Growth",
      "Custom Design",
      "Domain Setup",
      "Maintenance (3 Months)",
      "Unlimited Revisions",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are delivered within 1-2 weeks depending on the package and requirements.",
  },
  {
    question: "Do you provide mobile-friendly websites?",
    answer:
      "Yes, all our packages include fully mobile responsive design that works on all devices.",
  },
  {
    question: "Can I update my website after launch?",
    answer:
      "Absolutely. We offer maintenance packages and can help you with updates anytime.",
  },
  {
    question: "Do you integrate WhatsApp and Google Maps?",
    answer:
      "Yes, WhatsApp and Google Maps integration are included in our Growth and Premium packages.",
  },
];

function Packages() {
  return (
    <section className="packages-page">
      <div className="packages-container">
        <h1>Pricing</h1>

        <p className="packages-subtitle">
          Affordable website solutions designed to help businesses establish a
          professional online presence.
        </p>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`package-card ${pkg.highlighted ? "package-card--highlighted" : ""}`}
            >
              {pkg.highlighted && (
                <span className="package-badge">Most Popular</span>
              )}
              <h2>{pkg.name}</h2>

              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Link to="/contact" className="package-btn">
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="comparison-section">
          <h2>Package Comparison</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Growth</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Professional Website</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Mobile Responsive</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>WhatsApp Integration</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Google Maps</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Domain Setup</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
