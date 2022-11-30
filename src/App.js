import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Offers from './components/Offers';
import Packages from './components/Packages';
import Subpackages from './components/Subpackages';
import Videodemo from './components/Videodemo';
import Wordout from './components/Wordout';

function App() {
  return (
    <div className="App">
      <section id='header' className='snap-start'>
       <Nav />
      </section>
      <section id='packages' className='snap-center'>
        <Packages />
      </section>
      <section id='subpackages'>
        <Subpackages />
      </section>
      <section id='wordout'>
        <Wordout />
      </section>
      <section id='videodemo'>
        <Videodemo />
      </section>
      <section id='offers'>
        <Offers />
      </section>
      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
