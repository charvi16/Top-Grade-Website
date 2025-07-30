import React from 'react';
import { useState,useEffect,useRef } from 'react';
import Navbar from '../../components/navbar/navbar';
import './pricing.css';

function Pricing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingOptions = [
    { id: 'a', name: 'Basic Essay Writing', price: 10, description: 'Standard academic essays up to 5 pages' },
    { id: 'b', name: 'Research Paper', price: 20, description: 'In-depth research with citations' },
    { id: 'c', name: 'Data Analysis', price: 25, description: 'Statistical analysis and interpretation' },
    { id: 'd', name: 'Thesis Writing', price: 30, description: 'Complete thesis or dissertation' },
    { id: 'e', name: 'Programming Assignment', price: 15, description: 'Coding projects and debugging' },
    { id: 'f', name: 'Case Study Analysis', price: 18, description: 'Business case studies with solutions' },
    { id: 'g', name: 'Lab Report', price: 12, description: 'Scientific lab reports with analysis' },
    { id: 'h', name: 'Literature Review', price: 22, description: 'Comprehensive literature analysis' }
  ];

  // Filter pricing options based on search term
  const filteredOptions = pricingOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    option.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle service selection
  const handleServiceSelect = (service) => {
    const isSelected = selectedServices.find(s => s.id === service.id);
    if (isSelected) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Calculate total price
  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);

  // Remove selected service
  const removeService = (serviceId) => {
    setSelectedServices(selectedServices.filter(s => s.id !== serviceId));
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title fade-in">Custom Pricing Calculator</h2>
          <p className="pricing-subtitle fade-in">Select the services you need and get an instant price quote</p>
          
          <div className="pricing-calculator fade-in">
            <div className="search-container" ref={searchContainerRef}>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search for services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                //   onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  className="search-input"
                />
                <div className="search-icon">🔍</div>
              </div>
              
              {showDropdown && (
                <div className="dropdown">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map(option => (
                      <div
                        key={option.id}
                        className={`dropdown-item ${selectedServices.find(s => s.id === option.id) ? 'selected' : ''}`}
                        onClick={() => handleServiceSelect(option)}
                      >
                        <div className="option-content">
                          <div className="option-name">{option.name}</div>
                          <div className="option-description">{option.description}</div>
                        </div>
                        <div className="option-price">${option.price}</div>
                      </div>
                    ))
                  ) : (
                    <div className="dropdown-item no-results">No services found</div>
                  )}
                </div>
              )}
            </div>

            <div className="selected-services">
              <h3>Selected Services</h3>
              {selectedServices.length > 0 ? (
                <div className="services-list">
                  {selectedServices.map(service => (
                    <div key={service.id} className="selected-service">
                      <div className="service-info">
                        <span className="service-name">{service.name}</span>
                        <span className="service-desc">{service.description}</span>
                      </div>
                      <div className="service-actions">
                        <span className="service-price">${service.price}</span>
                        <button
                          className="remove-btn"
                          onClick={() => removeService(service.id)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="total-price">
                    <div className="total-label">Total Price:</div>
                    <div className="total-amount">${totalPrice}</div>
                  </div>
                  {/* <button 
                    className="order-now-btn"
                    onClick={() => scrollToSection('contact')}
                  >
                    Order Now - ${totalPrice}
                  </button> */}
                </div>
              ) : (
                <div className="empty-selection">
                  <div className="empty-icon">📝</div>
                  <p>No services selected yet. Search and select services above to see pricing.</p>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pricing