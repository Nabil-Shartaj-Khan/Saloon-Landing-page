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
import Book from './components/Book/Book';

function App() {
  return (
    <>

      <Header />
      <Intro />
      <ScrollAnimation>
        <Team />
      </ScrollAnimation>
      <Service />
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <Testimonial />
      <ScrollAnimation>
        <Book />
      </ScrollAnimation>
      <ScrollAnimation>
        <Location />
      </ScrollAnimation>
      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>

    </>
  );
}

export default App;
