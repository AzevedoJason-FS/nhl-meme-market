import React, { useState } from 'react';

const faqs = [
  { question: 'What is SEO?', answer: 'SEO stands for Search Engine Optimization, which improves your site’s visibility on search engines.' },
  { question: 'Do I need SEO?', answer: 'If you want to attract more organic traffic to your website, SEO is essential.' },
  { question: 'How do I know if SEO is working?', answer: 'You can track SEO performance using tools like Google Analytics and Search Console.' },
  { question: 'What is local SEO?', answer: 'Local SEO helps your business appear in location-based searches, especially useful for local services.' },
  { question: 'How long does SEO take?', answer: 'SEO is a long-term strategy. Results typically appear in 3-6 months depending on competition and consistency.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Have Questions About SEO?</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <button className="faq-toggle">
                {openIndex === index ? '-' : '+'}
              </button>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
