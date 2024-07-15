import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Experience from './Components/Experience/Experience.jsx'
import MyWork from './Components/MyWork/MyWork.jsx'
import Education from './Components/Education/Education.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
     <Services />  
     <Experience/>
      <MyWork />
      <Education/>
      <Contact />
      <Footer />  

    </div>
  )
}

export default App
