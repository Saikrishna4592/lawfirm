import React from 'react'
import "../src/App.css";
import HeroSection from './components/HeroSection/HeroSection'
import Intro from './components/Intro/intro'
import Section3 from './components/Section3/Section3'
import Section5 from './Section5/Section5';
import Section4 from "./components/Section4/Section4"
import Section6 from "./Section6/Section6"
import Section7 from "./Section7/Section7"
import Section8 from "./Section8/Section8"
import Footer from "./Footer/Footer"
const App = () => {
  return (
    <div className='App'>
      <HeroSection/>
      <Intro/>
      <Section6/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section7/>
      <Section8/>
      <Footer/>
    </div>
  )
}

export default App