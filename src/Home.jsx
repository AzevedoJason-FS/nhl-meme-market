import { Link } from "react-router-dom";
import Header from "./Header";
import hole from "./hole.webm";
import stars from "./stars.svg";
import btn from "./btn.svg";
import btn2 from "./btn2.svg";
import btn3 from "./btn3.svg";
import graph from "./graph.svg";
import logo from "./logo.svg";
import map from "./map.svg";
import globe from "./globe.svg";
import googleRank from "./google-rank.svg";
import t from "./t.svg";
import box from "./box.svg";
import bullet from "./bulletPoint.svg";

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
              <h4 style={{ color: "white", fontSize: "20px", fontWeight: "600", letterSpacing: '-0.8px' }}>
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
            <h3 style={{maxWidth: '1000px'}}>
              We are Orbitly, we help business owners like you generate organic traffic using Ai-driven content, SEO targeting, and social
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
                <div className="header" style={{ color: "rgba(255, 255, 255, 0.6)", fontWeight: "500", fontSize: "20px" }}>
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
                <div className="header" style={{ color: "white", fontWeight: "600", fontSize: "20px", paddingTop: "30px", background: "" }}>
                  $200
                </div>
              </div>
            </div>
            <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.6)" }}>
              Don't fall for digital marketing agencies that simply take your money and spend $1,500 - $2,000 on ads just for temporary numbers.
            </p>
          </div>
          <div className="text-box">
            <div className="category">
              <p style={{ margin: "0" }}>Orbitly Digital Marketing</p>
            </div>
            <h3>Why choose Orbitly.</h3>
            <p id="subtitle">We gear up your business so it can succeed online </p>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "2rem", letterSpacing: '-0.8px' }}>
              <div id="text-div">
                <h4 id="gradient-title" style={{ fontWeight: "600", fontSize: "32px" }}>
                  Build Visibility That Lasts — Not Just Temporary Clicks
                </h4>
                <p style={{ color: "white", fontSize: "18px" }}>
                  If your website or social media content isn’t optimized, running ads can be a waste because your content won’t rank well on Google,
                  and you’ll struggle to turn clicks into customers.
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Our AI tools optimize your content to rank higher on Google therefore driving more organic traffic — without wasting thousands on
                  ineffective ads
                </p>
              </div>
              <div className="info-1" style={{marginTop: '0'}}>
              <img src={googleRank} alt="Google SEO Rank graphic" />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: 'row-reverse', justifyContent: "space-around", alignItems: "center", marginTop: "8rem" }}>
              <div id="text-div">
                <h4 id="gradient-title" style={{ fontWeight: "600", fontSize: "32px", letterSpacing: '-0.8px' }}>
                Why pay more for the same results?
                </h4>
                <p style={{ color: "white", fontSize: "18px" }}>
                  If your website or social media content isn’t optimized, running ads can be a waste because your content won’t rank well on Google,
                  and you’ll struggle to turn clicks into customers.
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Our AI tools optimize your content to rank higher on Google therefore driving more organic traffic — without wasting thousands on
                  ineffective ads
                </p>
              </div>
              <div className="info-1" style={{marginTop: '0'}}>
              <img src={map} alt="Georgia Digital Marketing Prices" style={{maxWidth: '380px'}}/>
              </div>
            </div>
          </div>
          <div className="text-box" id="pricing">
            <div className="category">
              <p style={{ margin: "0" }}>Pricing</p>
            </div>
            <h3>
              We like keeping things simple<br></br>
              One plan. One price. infinite growth
            </h3>
            <p id="subtitle">We gear up your business so it can succeed online </p>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "2rem", flexDirection: "column" }}>
              <span style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
                <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>Only</p>
                <h3
                  style={{ fontSize: "48px", fontWeight: "600", textShadow: "rgb(160 148 255 / 60%) 0 2px 30px", marginTop: "0" }}
                  id="gradient-title">
                  $200
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>/month</p>
              </span>
              <div className="bullet-box">
                <div className="bullets">
                  <span>
                    <img src={bullet} alt="Pricing Background Box" />
                    <p>Done-For-You Website & Funnel Setup</p>
                  </span>
                  <span>
                    <img src={bullet} alt="Pricing Background Box" />
                    <p>AI-Powered Traffic & Lead Generation</p>
                  </span>
                  <span>
                    <img src={bullet} alt="Pricing Background Box" />
                    <p>Performance Analytics Reports</p>
                  </span>
                </div>
                <div className="bullets">
                  <span>
                    <img src={bullet} alt="Pricing Background Box" />
                    <p>Content & Social Media Promotion</p>
                  </span>
                  <span>
                    <img src={bullet} alt="Pricing Background Box" />
                    <p>Competitive Analysis</p>
                  </span>
                  <span>
                    <img src={bullet} alt="Pricing Background Box" />
                    <p>Priority Support + Growth Insights</p>
                  </span>
                </div>
              </div>
              <Link className="acc-btn" to="/" style={{ marginTop: "2rem" }}>
                <img src={btn} alt="Onboarding Button" />
              </Link>
              <img src={box} alt="Pricing Background Box" style={{ position: "absolute", marginTop: "-6rem", zIndex: "-1" }} />
            </div>
          </div>
          <div className="text-box" style={{marginTop: '8rem'}}>
            <div className="category">
              <p style={{ margin: "0" }} className="cat-text">
               Get started
              </p>
            </div>
            <h3>
            Grow smarter with Orbitly.
            </h3>
            <p id="subtitle">Own the Results — Don’t Just Rent Them With Ads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
