import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Resources />
      </main>
      <Footer />
    </>
  );
}

export default App;
