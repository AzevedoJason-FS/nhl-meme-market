import { Link } from "react-router-dom";
import logo from "./logo.svg";
import btn from "./btn.svg";

const Header = () => {
  return (
    <header>
      <span>
        <img src={logo} alt="Orbitly Logo" />
        <h2>Orbitly</h2>
      </span>
      <div>
        <Link to="/research/LeadrPro">Process</Link>
        <Link to="/research/LeadrPro">Services</Link>
        <Link to="/research/LeadrPro">Pricing</Link>
        <Link to="/research/LeadrPro">Resources</Link>
      </div>
      <Link className="acc-btn" to="/research/LeadrPro">
        <img src={btn} alt="Onboarding Button" />
      </Link>
    </header>
  );
};

export default Header;
