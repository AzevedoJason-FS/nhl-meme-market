import { Link } from "react-router-dom";
import Header from "./Header";
import hole from "./hole.webm";
import stars from "./stars.svg";
import btn from "./btn.svg";
import btn2 from "./btn2.svg";
import btn3 from "./btn3.svg";
import graph from "./graph.svg";
import logo from "./logo.svg";
import globe from "./globe.svg";
import icon from "./googleicon.svg";
import ill from "./ill.svg";
import googleRank from "./google-rank.svg";
import t from "./t.svg";
import box from "./box.svg";
import bullet from "./bulletPoint.svg";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import FAQSection from "./FAQSection";
import ServiceSelector from "./ServiceSelector";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="landing">
          <div className="category">
            <img src={stars} alt="Ai Content Optimization" />
            <p style={{ margin: "0" }} className="cat-text">
              #1 AI Digital Marketing Service in Georgia
            </p>
          </div>
          <h1>
            Your business should grow while you sleep.<br></br>It does with us.
          </h1>
          <h3 id="subtitle">You run the business. We’ll make it grow out of orbit.</h3>
          <div className="btn-box">
            <Link to="/services">
              <img src={btn2} alt="Digital Marketing Georgia - Local SEO and Social Media Strategy" />
            </Link>
            <Link to="/get-started">
              <img src={btn3} alt="Digital Marketing Georgia - Local SEO and Social Media Strategy" />
            </Link>
          </div>
          <video loop muted autoPlay>
            <source src={hole} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="info-1">
            <div id="info-1-text">
              <h4 style={{ color: "white", fontSize: "20px", fontWeight: "600", letterSpacing: "-0.8px", maxWidth: "400px" }}>
                Optimize your content with Orbitly;<br></br>The most affordable Digital Marketing Service in Georgia.
              </h4>
              <p id="gradient-title">All done-for-you marketing service:</p>
              <p>💻 Website Landing Page Optimization</p>
              <p>🔍 Ai SEO Optimized Content</p>
              <p>📱 Social Media Exposure</p>
              <p>
                <img src={icon} alt="Google MyBusiness Optimization" style={{ width: "16px" }} /> Google MyBusiness Profile Optimization
              </p>
              <p style={{ marginBottom: "26px" }}>📈 Traffic Analytics Report</p>
            </div>
            <img src={graph} alt="Digital Marketing Georgia - Local SEO and Social Media Strategy" />
          </div>
          <div className="text-box">
            <div className="category">
              <p style={{ margin: "0" }} className="cat-text">
                Who are we
              </p>
            </div>
            <h3 style={{ maxWidth: "1000px" }}>
              We are Orbitly, we help business owners like you generate organic traffic using Ai-driven content, SEO targeting, and social media
              focus. Fully done-for-you so you can focus on running your business.
            </h3>
          </div>
          <div className="text-box" style={{ position: "relative" }}>
            <img src={globe} alt="Georgia digital marketing experts" style={{ width: "100%" }} />
            <div className="category" style={{ margin: "-180px auto 0 auto" }}>
              <p style={{ margin: "0" }}>Process</p>
            </div>
            <h2>Your path for out-of-this world growth.</h2>
            <h3 id="subtitle">
              We understand how to grow visibility in your specific market.<br></br>Whether you're in Georgia or beyond, we combine localized SEO,
              smart ad targeting, and community engagement to get you seen by the right people.
            </h3>
            <img src={t} alt="SEO services Georgia" style={{ width: "100%", marginTop: "2rem" }} />
            <div className="wrapper">
              <span className="ring ring-1"></span>
              <span className="ring ring-2"></span>
              <span className="ring ring-3"></span>
              <span className="ring ring-4"></span>
              <span className="arrow"></span>
            </div>
          </div>
          <div className="text-box">
            <div className="category">
              <p style={{ margin: "0" }} className="cat-text">
                Services
              </p>
            </div>
            <h3>Every Platform, Every Angle — We’ve Got You Covered.</h3>
            <ServiceSelector />
          </div>
          <div className="text-box">
            <div className="category">
              <p style={{ margin: "0" }} className="cat-text">
                Compare
              </p>
            </div>
            <h2>We turn your business into a solution everyone needs.</h2>
            <h3 id="subtitle">
              95% of pages get no organic traffic from Google once you stop paying for their ads.<br></br>Hire us as your expert digital marketing in
              Georgia.
            </h3>
            <p style={{ color: "white", fontSize: "18px", textAlign: "center" }}>
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
              </div>

              <div className="column orbitly-column">
                <div className="header orbitly-header">
                  <span className="orbitly-logo">
                    <img src={logo} alt="Orbitly Digital Marketing Georgia" />
                    <p>Orbitly</p>
                  </span>
                </div>
                {["➖", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "➖", "⚪️", "⚪️", "➖"].map((icon, idx) => (
                  <div className={`cell ${icon === "⚪️" ? "check" : "cross"}`} key={idx}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.6)", marginTop: "4rem" }}>
              Don't fall for digital marketing agencies that take your money and spend $1,500 - $5,000 on ads just for temporary numbers.
            </p>
          </div>
          <div className="text-box">
            <div className="category">
              <p style={{ margin: "0" }}>Orbitly Digital Marketing</p>
            </div>
            <h2>Why choose Orbitly.</h2>
            <h3 id="subtitle">We gear up your business so it can succeed online </h3>
            <div className="square-content">
              <div className="square1">
                <div id="text-div">
                  <h3>We Offer Local Newspaper Advertising</h3>
                  <p style={{ marginBottom: "20px" }}>
                    If your website or social media content isn’t optimized,
                    <b style={{ fontWeight: "400", color: "rgba(255, 255, 255, 0.6)" }}>
                      running ads can be a waste since poor rankings and weak engagement will make it hard to turn clicks into customers.
                    </b>
                  </p>
                  <p>We'll optimize your Google MyBusiness Profile so that you're the first solution when new customers need help.</p>
                </div>
                <img src={googleRank} alt="SEO services Georgia" />
              </div>
              <div className="square2">
                <div id="text-div">
                  <h3>Build Visibility That Lasts.</h3>
                  <p style={{ marginBottom: "20px" }}>
                    If your website or social media content isn’t optimized,
                    <b style={{ fontWeight: "400", color: "rgba(255, 255, 255, 0.6)" }}>
                      running ads can be a waste since poor rankings and weak engagement will make it hard to turn clicks into customers.
                    </b>
                  </p>
                  <p>We'll optimize your Google MyBusiness Profile so that you're the first solution when new customers need help.</p>
                  <img src={ill} alt="small business marketing Georgia" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-box" id="pricing">
            <div className="category">
              <p style={{ margin: "0" }}>Pricing</p>
            </div>
            <h2>
              We like keeping things simple<br></br>
              One plan. One price. infinite growth
            </h2>
            <h3 id="subtitle">Online Marketing has never been so affordable</h3>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "2rem", flexDirection: "column" }}>
              <span style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
                <h3
                  style={{ fontSize: "48px", fontWeight: "600", textShadow: "rgb(160 148 255 / 60%) 0 2px 30px", marginTop: "0" }}
                  id="gradient-title">
                  Start Growing Today
                </h3>
              </span>
              <div className="bullet-box">
                <div className="bullets">
                  <span>
                    <img src={bullet} alt="digital marketing Georgia" />
                    <p>Done-For-You Website & Funnel Setup</p>
                  </span>
                  <span>
                    <img src={bullet} alt="digital marketing Georgia" />
                    <p>AI-Powered Traffic & Lead Generation</p>
                  </span>
                  <span>
                    <img src={bullet} alt="digital marketing Georgia" />
                    <p>Performance Analytics Reports</p>
                  </span>
                </div>
                <div className="bullets">
                  <span>
                    <img src={bullet} alt="digital marketing Georgia" />
                    <p>Content & Social Media Promotion</p>
                  </span>
                  <span>
                    <img src={bullet} alt="digital marketing Georgia" />
                    <p>Competitive Analysis</p>
                  </span>
                  <span>
                    <img src={bullet} alt="digital marketing Georgia" />
                    <p>✨Enjoy Monthly Perks✨</p>
                  </span>
                </div>
              </div>
              <Link className="acc-btn" to="/" style={{ marginTop: "2rem" }}>
                <img src={btn} alt="digital marketing Georgia" />
              </Link>
              <img src={box} alt="digital marketing Georgia" style={{ position: "absolute", marginTop: "-6rem", zIndex: "-1", width: "100%" }} />
            </div>
          </div>
          <section class="contact-section">
            <div class="contact-left">
              <h2>We can't wait to embark on this journey with you</h2>
              <h3 id="subtitle" style={{textAlign: 'left'}}>Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.</h3>
              <div className="contact-info">
                <div class="info-item">
                  <span>📧</span>
                  <span>hello@orbitlymarketing.com</span>
                </div>
                {/* <div class="info-item">
                  <span>📞</span>
                  <span>(969) 819-8061</span>
                </div> */}
                <div class="info-item">
                  <span>📍</span>
                  <span>Summervile, GA</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </section>
          <FAQSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
