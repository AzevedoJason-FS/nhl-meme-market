import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";
import map from "./map.svg";
import Footer from "./Footer";
import Header from "./Header";

const GetStarted = () => {
  return (
    <div className="content">
      <Header />
      <div className="square-content">
        <div className="square1" style={{ backgroundColor: "rgba(60, 8, 126, 0)", maxWidth: "50%" }}>
          <h2 style={{ maxWidth: "1000px", color: "white", margin: "auto", fontSize: "36px", letterSpacing: "-0.8px" }}>
            🚀 Why Hire Us — A Specialized Digital Marketing Agency
          </h2>
          <p style={{ color: "rgb(255 255 255 / 60%)", margin: "auto", marginTop: "20px" }}>
            We understand how to grow visibility in your specific market. Whether you're in Georgia or beyond, we combine localized SEO, smart ad
            targeting, and community engagement to get you seen by the right people.
          </p>
          <h3 style={{ color: "white", margin: "auto", marginTop: "40px" }}>
            We aim at being the most affordable solution for local small businesses in Georgia.
          </h3>
        </div>
        <div className="square2">
          <img src={map} alt="cheap digital marketing Georgia" style={{ maxWidth: "360px" }} />
        </div>
      </div>
      <section class="contact-section" style={{ marginTop: "6rem" }}>
        <div class="contact-left">
          <h1>The most affordable solution to beating your local competition.</h1>
          <p>SEO (So you get found)</p>
          <p>Content (So people trust you)</p>
          <p>Social Media (So you stay top-of-mind)</p>
          <p>Analytics (So you can track every win)</p>
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
      <FAQSection />
      <Footer />
    </div>
  );
};

export default GetStarted;
