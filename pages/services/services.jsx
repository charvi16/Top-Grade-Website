import React from 'react'
import './services.css';

function Services() {
    const services = [
    {
      icon: '📝',
      title: 'Essay Writing',
      description: 'Professional essay writing services for all academic levels. Original, well-researched content tailored to your requirements.',
      price: 'Starting from 500/page'
    },
    {
      icon: '🔬',
      title: 'Research Papers',
      description: 'Comprehensive research papers with proper citations and methodology. Expert writers with advanced degrees.',
      price: 'Starting from INR 500/page'
    },
    {
      icon: '📊',
      title: 'Data Analysis',
      description: 'Statistical analysis and data interpretation services. SPSS, R, Python, and Excel expertise available.',
      price: 'Starting from INR 500/page'
    },
    {
      icon: '🎯',
      title: 'Thesis Writing',
      description: 'Complete thesis and dissertation writing support. From proposal to final defense preparation.',
      price: 'Starting from INR 500/page'
    },
    {
      icon: '💻',
      title: 'Programming Help',
      description: 'Coding assignments and programming projects. Java, Python, C++, JavaScript, and more languages covered.',
      price: 'Starting from INR 500/page'
    },
    {
      icon: '📚',
      title: 'Case Studies',
      description: 'Business case studies and analysis. Real-world applications with practical solutions and recommendations.',
      price: 'Starting from INR 500/page'
    }
  ];


  return (
    <>
        <div id="services" className="service-container">
          <h2 className="section-title fade-in">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default Services