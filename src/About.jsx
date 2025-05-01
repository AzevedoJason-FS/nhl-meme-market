import Header from "./Header";
// import map from "./map.svg";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="content">
      <Header />
      <div className="about-container">
        <div className="category">
          <p style={{ margin: "0" }} className="cat-text">
            About
          </p>
        </div>
        <h2
          style={{
            maxWidth: "1000px",
            color: "white",
            textAlign: "center",
            margin: "auto",
            fontSize: "36px",
            letterSpacing: "-0.8px",
            marginBottom: "4rem",
            marginTop: "2rem",
          }}>
          Our mission is to provide an affordable marketing service for small businesses who can grow their online presence through smart and
          practical digital marketing.
        </h2>
        <div className="about-section">
          <div id="about-1">
            <p>
              Hey, I’m Jason, founder of Orbitly. I started this digital marketing agency with one goal: to help small businesses grow their
              visibility and revenue online — without wasting time or money.
            </p>
            <p>
              After working with many local businesses in Georgia and beyond, I saw a common pattern: most web designers stop at launching a
              nice-looking site and call it “SEO.” But real growth takes more.
            </p>
            <p>
              At Orbitly, I focus on practical, transparent digital marketing — including SEO, blog content, and local social media strategy that
              builds long-term visibility and trust. You’ll always work directly with me — no middlemen, no fluff, just a partner who’s invested in
              your results.
            </p>
            <p>Whether you're just getting online or trying to outpace competitors, I’m here to help you do it right.</p>
          </div>
          <div className="about-features">
            <h2>What Makes Orbitly Different?</h2>
            <ul>
              <li>
                <strong style={{ color: "white" }}>Direct partnership:</strong> You work with me — not a rotating team of strangers.
              </li>
              <li>
                <strong style={{ color: "white" }}>Tailored strategy:</strong> No templates. Everything is built around your goals.
              </li>
              <li>
                <strong style={{ color: "white" }}>Full-funnel focus:</strong> From SEO to social to content — everything works together.
              </li>
              <li>
                <strong style={{ color: "white" }}>Transparent results:</strong> Clear tracking, honest feedback, and measurable wins.
              </li>
            </ul>
          </div>
        </div>
        {/* <img src={map} alt="cheap digital marketing Georgia" /> */}
        <section class="contact-section" style={{marginTop: '6rem'}}>
          <div class="contact-left">
            <h1>We can't wait to embark on this journey with you</h1>
            <p>Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.</p>
            <div class="contact-info">
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
