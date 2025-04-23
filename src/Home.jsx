import { Link } from "react-router-dom";
import Header from "./Header";
import hole from "./hole.webm";
import stars from "./stars.svg";
import btn2 from "./btn2.svg";
import btn3 from "./btn3.svg";
import graph from "./graph.svg";
import logo from "./logo.svg";
import globe from "./globe.svg";
import googleRank from "./google-rank.svg";
import t from "./t.svg";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="landing">
          <div className="category">
            <img src={stars} alt="Ai Sparkle" />
            <p style={{ margin: "0" }} className="cat-text">
              Grow using Ai
            </p>
          </div>
          <h2>
            Your business should grow while you sleep.<br></br>It does with us.
          </h2>
          <p id="subtitle">You run the business. We’ll make it grow out of orbit.</p>
          <div className="btn-box">
            <Link to="/">
              <img src={btn2} alt="Ai Sparkle" />
            </Link>
            <Link to="/">
              <img src={btn3} alt="Ai Sparkle" />
            </Link>
          </div>
          <video loop muted autoPlay>
            <source src={hole} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="info-1">
            <div>
              <h4 style={{ color: "white", fontSize: "20px", fontWeight: "600" }}>
                Optimize with ease and climb the Google<br></br>Search Engine ladder like never before.
              </h4>
              <p id="gradient-title">All done-for-you marketing service:</p>
              <p>💻 Website Landing Page Optimization</p>
              <p>🔍 SEO Optimized Blog Posts</p>
              <p>📱 Social Media Exposure</p>
              <p>🧲 Lead Magnet Implementation</p>
              <p style={{ marginBottom: "26px" }}>📈 Traffic Analytics Report</p>
            </div>
            <img src={graph} alt="Ai Sparkle" />
          </div>
          <div className="text-box">
            <div className="category">
              <p style={{ margin: "0" }} className="cat-text">
                Who are we
              </p>
            </div>
            <h3>
              We are Orbitly, we help business owners like you generate organic traffic using <br></br>Ai-driven content, SEO targeting, and social
              media focus. Fully done-for-you so you can focus on running your business.
            </h3>
          </div>
          <div className="text-box" style={{ marginTop: "4rem", position: "relative" }}>
            <img src={globe} alt="Ai Globe" />
            <div className="category" style={{ margin: "-180px auto 0 auto" }}>
              <p style={{ margin: "0" }}>Process</p>
            </div>
            <h3>Your path for out-of-this world growth.</h3>
            <p id="subtitle">A simple, effective approach to deliver excellence.</p>
            <img src={t} alt="Orbitly SEO Optimization Process" style={{ marginTop: "3rem" }} />
            <div class="wrapper">
              <span class="ring ring-1"></span>
              <span class="ring ring-2"></span>
              <span class="ring ring-3"></span>
              <span class="ring ring-4"></span>
              <span class="arrow"></span>
            </div>
          </div>
          <div className="text-box">
            <div className="category">
              <p style={{ margin: "0" }} className="cat-text">
                Services
              </p>
            </div>
            <h3>We turn your business into a solution everyone needs.</h3>
            <p id="subtitle">
              95% of pages get no organic traffic from Google once you stop paying for their ads.<br></br>Hire us as your personal digital marketing
              team.
            </p>
            <p style={{ color: "white", fontSize: "18px" }}>
              Google Ads can be powerful, but they're expensive, short-lived, and require constant management.
            </p>
            <div className="comparison-table">
              <div className="column feature-column">
                <div className="header">Feature</div>
                {[
                  "Pay-per-click pricing",
                  "Long-term asset creation (blog, site, funnel)",
                  "AI-powered lead generation",
                  "Smart article writing",
                  "24/7 automated marketing",
                  "Flat, transparent pricing",
                  "Works even when you stop paying",
                  "Built-in SEO content creation",
                  "Custom-built conversion funnel",
                  "Beginner-friendly with no setup hassle",
                  "Requires ongoing ads management",
                  "Scales with your business over time",
                  "Global Exposure",
                  "Time consuming",
                ].map((feature, idx) => (
                  <div className="cell" key={idx}>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="column ads-column">
                <div className="header">Paying Ads</div>
                {["⚪️", "➖", "➖", "➖", "➖", "➖", "➖", "➖", "➖", "➖", "⚪️", "➖", "➖", "⚪️"].map((icon, idx) => (
                  <div className={`cell ${icon === "⚪️" ? "check" : "cross"}`} key={idx}>
                    {icon}
                  </div>
                ))}
                <div className="header" style={{ color: "white", fontWeight: "600", fontSize: "22px" }}>
                  Over $1,500
                </div>
              </div>

              <div className="column orbitly-column">
                <div className="header orbitly-header">
                  <span className="orbitly-logo">
                    <img src={logo} alt="Orbitly Logo" />
                    <p>Orbitly</p>
                  </span>
                </div>
                {["➖", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "➖", "⚪️", "⚪️", "➖"].map((icon, idx) => (
                  <div className={`cell ${icon === "⚪️" ? "check" : "cross"}`} key={idx}>
                    {icon}
                  </div>
                ))}
                <div className="header" style={{ color: "white", fontWeight: "600", fontSize: "20px", paddingTop: "30px" }}>
                  $180
                </div>
              </div>
            </div>
            <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.6)" }}>
              Don't fall for digital marketing agencies that simply take your money and spend $1,500 - $2,000 on ads just for temporary numbers.
            </p>
          </div>
          <div className="text-box">
            <div className="category">
              <p style={{ margin: "0" }}>Process</p>
            </div>
            <h3>Why choose Orbitly.</h3>
            <p id="subtitle">We gear up your business so it can succeed online </p>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: 'center', marginTop: '2rem' }}>
              <div style={{ maxWidth: "44%" }}>
                <h4 id="gradient-title" style={{fontWeight: '600', fontSize: "20px"}}>Build Visibility That Lasts — Not Just Temporary Clicks</h4>
                <p style={{ color: "white" }}>
                  If your website or social media content isn’t optimized, running ads can be a waste because your content won’t rank well on Google,
                  and you’ll struggle to turn clicks into customers.
                </p>
                <p style={{ color: "white" }}>
                  Our AI tools optimize your content to rank higher on Google therefore driving more organic traffic — without wasting thousands on
                  ineffective ads
                </p>
              </div>

              <img src={googleRank} alt="Google SEO Rank graphic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
