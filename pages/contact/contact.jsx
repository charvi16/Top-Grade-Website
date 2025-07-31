import React, {useState, useEffect} from 'react'
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Debug: Log the data being sent
      console.log('Sending data:', formData);

      // Try GET request first (easier to debug)
      const testUrl = `https://script.google.com/macros/s/AKfycbxJFNgC8i7FpRJkaBwTSxaMCls8OU87cMmhD64WKTTu_Hft1diVQnSd3cFzDJYQ6SSS/exec?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&subject=${encodeURIComponent(formData.subject)}&message=${encodeURIComponent(formData.message)}`;
      
      console.log('Request URL:', testUrl);

      const response = await fetch(testUrl, {
        method: 'GET',
        mode: 'no-cors'
      });

      console.log('Response received');
      alert('Data sent! Please check your Google Sheet to see if it was added.');
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }

    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="contact">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Ready to get started? Contact us today for professional assignment help. Our team is available 24/7 to assist you.(To Upload a Document please click on To Upload)</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <span>999999999</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <span>charviagarwal2004@gmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <span>Available 24/7</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">⚡</div>
                  <span>Quick Response Time</span>
                </div>
                <div className="contact-item" onClick={() => window.open("https://forms.gle/iNMgAxSQrhXamgFv8", "_blank")}>
                    <div className="contact-icon">🗂️</div>
                    <span>To Upload </span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Assignment Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your assignment requirements..."
                  required
                />
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
  )
}

export default Contact  