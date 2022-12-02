import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Offers from './components/Offers';
import Packages from './components/Packages';
import Services from './components/Services';
import Subpackages from './components/Subpackages';
import Videodemo from './components/Videodemo';
import Wordout from './components/Wordout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      {/*<section id='header' className='snap-start'>
       <Nav />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='packages' className='snap-center'>
        <Packages />
      </section>
      {/*<section id='subpackages'>
        <Subpackages />
       </section>}
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
      </section>*/}
      <Home />
    </div>
  );
}

export default App;
