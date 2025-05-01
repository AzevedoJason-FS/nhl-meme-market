import { Link } from "react-router-dom";
import logo from "./logo.svg";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-logo">
        <img src={logo} alt="Orbitly Logo" />
          <span style={{color: 'white'}}>Orbitly</span>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Product</h4>
            <Link to="/research/LeadrPro">About us</Link>
            <Link to="/research/LeadrPro">Process</Link>
            <Link to="/research/LeadrPro">Pricing</Link>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <Link to="/research/LeadrPro">Website Design & Development</Link>
            <Link to="/research/LeadrPro">Google Business Profile Optimization</Link>
            <Link to="/research/LeadrPro">SEO Optimization</Link>
            <Link to="/research/LeadrPro">Social Media Content Design</Link>
          </div>
          <div class="footer-column">
            <h4>Resources</h4>
            <Link to="/research/LeadrPro">Blog</Link>
            <Link to="/research/LeadrPro">Contact</Link>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal">
        <Link to="/research/LeadrPro">Privacy Policy</Link>
        <Link to="/research/LeadrPro">Terms of Service</Link>
        </div>
        <p class="footer-copy">Orbitly Digital Marketing LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
