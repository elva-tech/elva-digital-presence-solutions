import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-shapes">
          <div className="shape circle"></div>
          <div className="shape square"></div>
          <div className="shape triangle"></div>
          <div className="shape hexagon"></div>
          <div className="shape circle small"></div>
          <div className="shape square medium"></div>
          <div className="shape triangle large"></div>
          <div className="shape hexagon small"></div>
        </div>

        <div className="hero-overlay">
          <span className="hero-badge">ELVA Digital Presence Solutions</span>

          <h1 className="hero-title">
            Build a Professional Website for Your Business
          </h1>

          <p className="hero-subtitle">
            We help local businesses improve visibility, credibility, and
            customer trust through modern websites.
          </p>

          <div className="hero-features">
            <span>Mobile Friendly</span>
            <span>WhatsApp Integration</span>
            <span>Google Maps Integration</span>
            <span>Fast Delivery</span>
            <span>Affordable Pricing</span>
          </div>

          <div className="hero-buttons">
            <Link to="/contact" className="hero-cta">
              Get Free Consultation
            </Link>
            <Link to="/portfolio" className="hero-cta-secondary">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why Website Section */}
      <section className="page-section page-section--white why-section">
        <div className="container">
          <h2 className="section-title">Why Your Business Needs a Website</h2>
          <p className="section-subtitle">
            Your Business Deserves a Professional Online Presence
          </p>

          <div className="why-grid">
            <div className="why-card">Improve credibility</div>
            <div className="why-card">Get discovered online</div>
            <div className="why-card">Capture customer inquiries</div>
            <div className="why-card">Stand out from competitors</div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="problems-section">
        <div className="container">
          <h2>Does Your Business Have These Problems?</h2>

          <div className="problems-grid">
            <div className="problem-card">
              Customers cannot find you online
            </div>
            <div className="problem-card">No professional website</div>
            <div className="problem-card">
              Competitors look more credible
            </div>
            <div className="problem-card">No online inquiries</div>
            <div className="problem-card">Limited digital presence</div>
          </div>

          <div className="flow-diagram">
            <h3>What Happens Today?</h3>
            <div className="flow-steps">
              <div className="flow-step">Google Search</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">No Website</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">Lost Trust</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step flow-step--danger">Lost Customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <h2>Our Solution</h2>

          <p className="solution-text">
            ELVA builds professional business websites that help increase trust,
            improve visibility, generate inquiries, and improve credibility.
            Stand out from competitors and create a strong online presence.
          </p>

          <div className="solution-grid">
            <div className="solution-card">Increase Trust</div>
            <div className="solution-card">Improve Visibility</div>
            <div className="solution-card">Generate Inquiries</div>
            <div className="solution-card">Improve Credibility</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="page-section page-section--white services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional digital solutions tailored for local businesses
          </p>

          <div className="services-preview-grid">
            <div className="service-preview-card">
              <h3>Business Websites</h3>
              <p>Professional websites for local businesses.</p>
            </div>
            <div className="service-preview-card">
              <h3>Google Maps Integration</h3>
              <p>Make it easier for customers to find you.</p>
            </div>
            <div className="service-preview-card">
              <h3>WhatsApp Integration</h3>
              <p>Allow customers to contact you instantly.</p>
            </div>
            <div className="service-preview-card">
              <h3>Domain Setup</h3>
              <p>Professional business identity.</p>
            </div>
          </div>

          <div className="section-cta">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="page-section page-section--grey industries-preview">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>

          <div className="industries-tags">
            {[
              "Clinics",
              "Hospitals",
              "Builders",
              "Schools",
              "Coaching Centers",
              "Chartered Accountants",
              "Architects",
              "Interior Designers",
              "Gyms",
            ].map((industry) => (
              <span key={industry} className="industry-tag">
                {industry}
              </span>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/industries" className="btn-secondary">
              Explore Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="page-section page-section--white process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            From consultation to launch — a simple, transparent workflow
          </p>

          <div className="process-grid">
            <div className="process-card">
              <span className="process-number">01</span>
              <h3>Consultation</h3>
              <p>Understand your business goals and requirements.</p>
            </div>
            <div className="process-card">
              <span className="process-number">02</span>
              <h3>Requirements Collection</h3>
              <p>Gather content, branding, and feature needs.</p>
            </div>
            <div className="process-card">
              <span className="process-number">03</span>
              <h3>Design & Development</h3>
              <p>Build a modern, mobile-friendly website.</p>
            </div>
            <div className="process-card">
              <span className="process-number">04</span>
              <h3>Review</h3>
              <p>Refine and perfect every detail with your feedback.</p>
            </div>
            <div className="process-card">
              <span className="process-number">05</span>
              <h3>Launch</h3>
              <p>Go live and start attracting customers online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-section page-section--grey testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Customer reviews and success stories
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                "ELVA helped our clinic establish a professional online
                presence. We now receive inquiries every week through our
                website."
              </p>
              <span className="testimonial-author">— Clinic Owner</span>
            </div>
            <div className="testimonial-card">
              <p>
                "Fast turnaround and excellent support. Our coaching center
                website looks professional and works perfectly on mobile."
              </p>
              <span className="testimonial-author">— Coaching Center Director</span>
            </div>
            <div className="testimonial-card">
              <p>
                "Affordable pricing with personalized support. ELVA made the
                entire process simple and stress-free for our business."
              </p>
              <span className="testimonial-author">— Small Business Owner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Build Your Online Presence?</h2>
          <p>Get Started Today</p>
          <Link to="/contact" className="hero-cta">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
