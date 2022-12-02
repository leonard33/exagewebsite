import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Offers from '../components/Offers'
import Packages from '../components/Packages'
import Services from '../components/Services'
import Subpackages from '../components/Subpackages'
import Wordout from '../components/Wordout'


const Home = () => {
  return (
    <div>
        <section id='Nav1'>
        <Nav />
        </section>
        <section id='service'>
        <Services />
        </section>
        <section id='packages'>
        <Packages />
        </section>
        <section id='subpackages'>
        <Subpackages />
        </section>
        <section id='wordout'>
        <Wordout />
        </section>
        <section id='offers'>
        <Offers />
        </section>
      <section id='footer'>
        <Footer />
        </section>
    </div>
  )
}

export default Home