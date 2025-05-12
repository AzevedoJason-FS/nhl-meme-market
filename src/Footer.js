import { Link } from "react-router-dom";
import logo from "./logo.svg";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-logo">
          <img src={logo} alt="Orbitly Logo" />
          <span style={{ color: "white" }}>Orbitly</span>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Product</h4>
            <Link to="/about-us">About Us</Link>
            <Link to="/get-started">Get Started</Link>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <Link to="/website-development-and-design">Website Design & Development</Link>
            <Link to="/google-business-profile-optimization">Google Business Profile Optimization</Link>
            <Link to="/seo-optimization">SEO Optimization</Link>
            <Link to="/social-media-content-design">Social Media Content Design</Link>
            <Link to="/local-paper-advertising">Local Tabloid Advertising</Link>
          </div>
          <div class="footer-column">
            <h4>Resources</h4>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/get-started">Contact Us</Link>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
        <p class="footer-copy">Orbitly Digital Marketing LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
