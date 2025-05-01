import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

const FAQ = () => {
  const faqs = [
    {
      question: "How affordable is Orbitly's service?",
      answer:
        "Our pricing is designed with small businesses and startups in mind. We offer custom packages for full-service digital marketing—no hidden fees, no unnecessary upsells.",
    },
    {
      question: "What exactly is included in your service?",
      answer:
        "We handle everything for you—from SEO optimization and keyword research to content creation and social media strategy. It’s a completely hands-off solution for busy business owners.",
    },
    {
      question: "Do I need to provide anything to get started?",
      answer:
        "Just a short onboarding call. We’ll gather everything we need—from brand info to goals—and our team handles the rest. No technical skills or content creation required from your side.",
    },
    {
      question: "I'm hesitant about spending on marketing—what if it doesn't work?",
      answer:
        "We understand. That’s why we focus on transparent reporting and real results. We don’t just post content—we build a strategy designed to attract leads and increase visibility over time.",
    },
    {
      question: "Can I cancel if I’m not satisfied?",
      answer:
        "Yes, we offer flexible month-to-month subscription. If you’re happy with the status of your business once we've driven traffic, you can cancel anytime—no penalties, no stress.",
    },
    {
      question: "What makes Orbitly different from freelancers or other agencies?",
      answer:
        "Most agencies stop at a new design or basic SEO. We go further — focusing on the one thing that matters: bringing in more clients, calls, and revenue. Our work is strategic, consistent, and tailored to your brand’s goals.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="content">
      <Header />
      <section className="faq-section">
        <h2 className="faq-title" style={{ marginBottom: "0" }}>
        ❔ Frequently Asked Questions
        </h2>
        <p id="subtitle">Everything you need to know before getting started.</p>
        <div className="faq-grid" style={{ display: "flex", flexDirection: "column", marginTop: "4rem" }}>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <button className="faq-toggle">{openIndex === index ? "-" : "+"}</button>
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
      <section class="contact-section" style={{marginTop: '8rem'}}>
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
      <Footer />
    </div>
  );
};

export default FAQ;
