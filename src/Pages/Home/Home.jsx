import { Link } from "react-router-dom";
import "./Home.css";

const heroFeatures = [
  "Mobile Friendly",
  "WhatsApp Integration",
  "Google Maps",
  "Fast Delivery",
  "Affordable Pricing",
];

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg-glow hero-bg-glow--left" />
        <div className="hero-bg-glow hero-bg-glow--right" />

        <div className="hero-container">
          <span className="hero-badge">ELVA Website Factory</span>

          <h1 className="hero-title">
            All-in-One Websites Powering
            <span className="hero-title-accent"> Business Growth</span>
          </h1>

          <p className="hero-subtitle">
            Stay ahead with professional websites designed for tomorrow&apos;s
            challenges — flexible solutions that adapt to your business needs.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="hero-cta">
              Get Started
            </Link>
            <Link to="/portfolio" className="hero-cta-secondary">
              View Portfolio
            </Link>
          </div>

          <div className="hero-video-showcase">
            <div className="video-frame">
              <div className="video-frame-header">
                <span className="video-dot video-dot--red" />
                <span className="video-dot video-dot--yellow" />
                <span className="video-dot video-dot--green" />
                <span className="video-frame-title">elva — website preview</span>
              </div>
              <div className="video-frame-body">
                <video
                  className="hero-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/elva-logo.svg"
                >
                  <source src="/hero-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="video-glow-ring" />
          </div>

          <div className="hero-features">
            {heroFeatures.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--white why-section">
        <div className="container">
          <span className="section-label">Why Your Business Needs a Website</span>
          <h2 className="section-title">
            Simplicity meets excellence in every project
          </h2>
          <p className="section-subtitle">
            Your business deserves a professional online presence that builds
            trust and drives real inquiries.
          </p>

          <div className="why-grid">
            <div className="why-card">Improve credibility</div>
            <div className="why-card">Get discovered online</div>
            <div className="why-card">Capture customer inquiries</div>
            <div className="why-card">Stand out from competitors</div>
          </div>
        </div>
      </section>

      <section className="problems-section">
        <div className="container">
          <span className="section-label">Common Challenges</span>
          <h2>Does Your Business Have These Problems?</h2>

          <div className="problems-grid">
            <div className="problem-card">Customers cannot find you online</div>
            <div className="problem-card">No professional website</div>
            <div className="problem-card">Competitors look more credible</div>
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

      <section className="solution-section">
        <div className="container">
          <span className="section-label">Our Solution</span>
          <h2>Built for global trade, designed for local businesses</h2>

          <p className="solution-text">
            ELVA builds professional business websites that help increase trust,
            improve visibility, generate inquiries, and improve credibility.
          </p>

          <div className="solution-grid">
            <div className="solution-card">Increase Trust</div>
            <div className="solution-card">Improve Visibility</div>
            <div className="solution-card">Generate Inquiries</div>
            <div className="solution-card">Improve Credibility</div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--white services-preview">
        <div className="container">
          <span className="section-label">What We Do</span>
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

      <section className="page-section page-section--grey industries-preview">
        <div className="container">
          <span className="section-label">Industries</span>
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

      <section className="page-section page-section--white process-section">
        <div className="container">
          <span className="section-label">How We Work</span>
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

      <section className="page-section page-section--grey testimonials-section">
        <div className="container">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Customer reviews and success stories
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                &ldquo;ELVA helped our clinic establish a professional online
                presence. We now receive inquiries every week through our
                website.&rdquo;
              </p>
              <span className="testimonial-author">— Clinic Owner</span>
            </div>
            <div className="testimonial-card">
              <p>
                &ldquo;Fast turnaround and excellent support. Our coaching center
                website looks professional and works perfectly on mobile.&rdquo;
              </p>
              <span className="testimonial-author">— Coaching Center Director</span>
            </div>
            <div className="testimonial-card">
              <p>
                &ldquo;Affordable pricing with personalized support. ELVA made the
                entire process simple and stress-free for our business.&rdquo;
              </p>
              <span className="testimonial-author">— Small Business Owner</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Build Your Online Presence?</h2>
          <p>Get started today with a free consultation</p>
          <Link to="/contact" className="hero-cta">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
