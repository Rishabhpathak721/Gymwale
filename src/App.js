import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import ContactUs from './Components/Contact';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Feature />
      <Gallery />
      <Offer />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
