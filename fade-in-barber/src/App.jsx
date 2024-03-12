import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Service from './components/Service/Service'
import Team from './components/Team/Team'
import Testimonial from './components/Testimonial/Testimonial'
import Location from './components/Location/Location'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <Intro />
      <About />
      <Service />
      <Team />
      <Testimonial />
      <Location />
      <Footer />
    </>
  )
}

export default App
