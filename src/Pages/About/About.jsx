import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1>About ELVA</h1>

        <p className="about-intro">
          ELVA helps local businesses establish a strong digital presence
          through professional websites and digital solutions.
        </p>

        <div className="about-cards">
          <div className="mission-card">
            <h2>Our Mission</h2>
            <p>
              Our mission is to help businesses become more visible, more
              credible, and more discoverable online.
            </p>
          </div>

          <div className="mission-card">
            <h2>Our Vision</h2>
            <p>
              To become the most trusted digital presence partner for local
              businesses, empowering them to compete and thrive in the digital
              economy.
            </p>
          </div>
        </div>

        <div className="why-elva">
          <h2>Why ELVA?</h2>

          <div className="why-grid">
            <div className="why-card">Local Team</div>
            <div className="why-card">Fast Turnaround</div>
            <div className="why-card">Affordable Pricing</div>
            <div className="why-card">Personalized Support</div>
            <div className="why-card">Future-Ready Solutions</div>
          </div>
        </div>

        <div className="about-cta">
          <p>Ready to work with a team that understands your business?</p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
