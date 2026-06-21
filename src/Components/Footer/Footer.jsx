import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>ELVA Digital Presence Solutions</h2>
          <p className="footer-tagline">
            Your Business Deserves a Professional Online Presence
          </p>
          <p>
            ELVA helps local businesses establish a strong digital presence
            through professional websites and digital solutions.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <div className="footer-links">
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <div className="footer-contact">
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>WhatsApp: +91 XXXXX XXXXX</p>
              <p>Email: hello@elvatech.in</p>
              <p>Website: web.elvatech.in</p>
            </div>
          </div>
        </div>

        <p className="copyright">
          © 2026 ELVA Digital Presence Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
