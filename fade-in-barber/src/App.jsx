import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Service from './components/Service/Service';
import Team from './components/Team/Team';
import Testimonial from './components/Testimonial/Testimonial';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import ScrollAnimation from './components/Animation/Animation';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <Service />
      <ScrollAnimation>
        <Team />
      </ScrollAnimation>
      <Testimonial />
      <ScrollAnimation>
        <Location />
      </ScrollAnimation>
      <Footer />
    </>
  );
}

export default App;
