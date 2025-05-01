import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import Header from "./Header";

const GetStarted = () => {
  return (
    <div className="content">
      <Header />
      <h2 style={{ maxWidth: "1000px", color: "white", textAlign: "center", margin: "auto", fontSize: "36px", letterSpacing: "-0.8px" }}>
        🚀 Why Hire Us — A Specialized Digital Marketing Agency
      </h2>
      <p style={{ color: "white", textAlign: "center", margin: "auto", marginTop: "20px"  }}>
        We understand how to grow visibility in your specific market. Whether you're in Georgia or beyond, we combine localized SEO, smart ad
        targeting, and community engagement to get you seen by the right people.
      </p>
      <section class="contact-section" style={{marginTop: '6rem'}}>
        <div class="contact-left">
          <h1>We can't wait to embark on this journey with you</h1>
          <p>SEO (so you get found)</p>
          <p>Content (so people trust you)</p>
          <p>Social Media (so you stay top-of-mind)</p>
          <p>Analytics (so you can track every win)</p>
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
