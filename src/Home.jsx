import { Link } from "react-router-dom";
import Header from "./Header";
import hole from "./hole.webm";
import stars from "./stars.svg";
import btn2 from "./btn2.svg";
import btn3 from "./btn3.svg";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="landing">
          <div className="category">
            <img src={stars} alt="Ai Sparkle" />
            <p style={{ margin: "0" }}>Grow using Ai</p>
          </div>
          <h2>
            Your business should grow while you sleep.<br></br>It does with us.
          </h2>
          <p id="subtitle">You run the business. We’ll make it grow out of orbit.</p>
          <div className="btn-box">
          <Link to="/"><img src={btn2} alt="Ai Sparkle" /></Link>
          <Link to="/"><img src={btn3} alt="Ai Sparkle" /></Link>
          </div>
          <video loop muted autoPlay>
            <source src={hole} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
