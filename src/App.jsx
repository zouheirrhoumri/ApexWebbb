import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
const App = () => {

  return (
    <>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

        <Header />
        <Hero />
        <Collaboration />
        <Footer />
      </div>


    </>
  );
}

export default App;
