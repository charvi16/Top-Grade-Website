import React from 'react'
import Navbar from '../../components/navbar/navbar';
import './home.css';
import Chatbot from '../../components/chatBot/chatbot';

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
        
        <div id="home" className="hero">
        {/* <div className="floating-element" style={{top: '10%', left: '10%', fontSize: '3rem'}}>📚</div>
        <div className="floating-element" style={{top: '20%', right: '30%', fontSize: '2rem'}}>✏️</div>
        <div className="floating-element" style={{bottom: '30%', left: '15%', fontSize: '2.5rem'}}>🎓</div>
        <div className="floating-element" style={{bottom: '20%', right: '40%', fontSize: '2rem'}}>📝</div> */}
        
        {/* 3D Book Element */}
        {/* <div className="book-3d">
          <div className="book">
            <div className="book-face book-front">
              <div className="book-pages">
                <div className="book-title">Academic Excellence</div>
                <div>Professional Writing</div>
                <div>Quality Research</div>
                <div>Expert Analysis</div>
                <div>Timely Delivery</div>
              </div>
            </div>
            <div className="book-face book-back"></div>
            <div className="book-face book-spine">EduAssist</div>
            <div className="book-face book-top"></div>
            <div className="book-face book-bottom"></div>
          </div>
        </div> */}
        
        <div className="hero-content">
          <h1>Professional Assignment Help</h1>
          <p>Get expert assistance with your academic assignments. Quality work, timely delivery, and academic excellence guaranteed.</p>
          <button onClick={() => scrollToSection('services')} className="cta-button">
            Get Started Now
          </button>
          {/* <Chatbot/> */}
        </div>
        </div>
    </>
  )
}

export default Home