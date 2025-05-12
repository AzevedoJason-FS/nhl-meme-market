import React, { useState } from 'react';
import { Link } from "react-router-dom";

const services = [
  {
    title: "Website design and development",
    content:
      "Orbitly Digital Marketing creates beautiful, responsive websites optimized for search engines. Our design ensures your site ranks well in local searches, attracts visitors, and drives conversions.",
      link: "/website-development-and-design"
  },
  {
    title: "Google Business Profile Optimization",
    content:
      "We optimize your Google Business Profile to improve visibility in local searches, making it easier for nearby customers to find and contact you.",
    link: "/google-business-profile-optimization"
  },
  {
    title: "SEO Optimization",
    content:
      "Our SEO strategies help your site rank higher in search engines, improving visibility and drawing in targeted traffic that’s ready to convert.",
      link: "/seo-optimization"
  },
  {
    title: "Social Media Content Design",
    content:
      "We craft eye-catching social media graphics and posts that engage your audience and support your digital marketing goals.",
      link: "/social-media-content-design"
  },
  {
    title: "Local Tabloid Advertising",
    content:
      "Boost your local reach through creative print advertising in popular community tabloids, reinforcing your brand in the neighborhood.",
      link: "/local-paper-advertising"
  },
];

export default function ServiceSelector() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="service-container">
      <div className="service-list">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          >
            {service.title}
          </div>
        ))}
      </div>
      <div className="service-detail">
        <h3>{services[selected].title}</h3>
        <p style={{color: 'white', margin: '40px 0'}}>{services[selected].content}</p>
        <Link to={services[selected].link} className='selector-btn'>View Service</Link>
        <div className="illustration-placeholder">Room for illustration</div>
      </div>
    </div>
  );
}
