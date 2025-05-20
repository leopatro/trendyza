import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;