import { useState } from 'react'
import Home from '../pages/home/home'
import Services from '../pages/services/services'
import './App.css'
import Contact from '../pages/contact/contact'
import Footer from '../pages/footer/footer'
import Navbar from '../components/navbar/navbar'
import Pricing from '../pages/pricing/pricing'
// import Chatbot from '../components/chatBot/chatbot'

function App() {

  return (
    <>
      <div className="assignment-help-website">
        <Navbar/>
        <Home/> 
        <Services/>
        <Pricing/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
