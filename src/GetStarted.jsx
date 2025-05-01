import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import Header from "./Header";

const GetStarted = () => {
  return (
    <div className="content">
      <Header />
      <section class="contact-section">
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
      <FAQSection />
      <Footer />
    </div>
  );
};

export default GetStarted;
