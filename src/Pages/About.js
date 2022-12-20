import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import "./About.css"
import biometric from "../assets/services/biometric.jpg";
import cctvsolution from "../assets/services/cctvsolution.jpg";
import datanetwork from "../assets/services/datanetwork.jpg";
import structurecabling from "../assets/services/structurecabling.jpg";

const About = () => {
 
  return (
    <div className='about'>
        <Nav />
        <div className='about-intro relative h-[100vh] w-full'>
            <div className='overlay-intro w-full h-[100vh] flex flex-col items-center justify-center'>
                <div className='intro-desc'>
                    <h2>~ ABOUT OUR COMPANY ~</h2>
                </div>
                <div className='about-description flex w-[95%]'>
                <div className='image-left relative mt-[40px] w-1/2 h-[70vh]'>
                    <img className='absolute top-0 right-24' src={biometric} alt="access control"/>
                    <img className='absolute bottom-0 left-[10rem]' src={datanetwork} alt="access control"/>
                    <img className='absolute right-0 top-[10rem]' src={cctvsolution} alt="access control"/>
                    <img className='absolute top-24' src={structurecabling} alt="access control"/>
                </div>
                <div className='about-news w-1/2 flex items-center justify-center'>
                <h6 className='w-[80%]'>Exage Networks  Limited is a leading installer/reseller in internet connectivity, WI-FI solutions, CCTV installation, 
                    access control systems FAIBA installations and it consultations. We offer Wireless and Wired Networks products and Solutions, active and passive network equipment, network accessories, components and communications solutions. 
                    We use products and solutions from leadng brands in networking including Cisco, Ubiquiti, Mikrotik, TP-link, Edge-Core, among others.
                </h6>
                </div>
                </div>
            </div>
        </div>
        <div className='about-head relative flex flex-col items-center text-center justify-center w-full h-[100vh]'>
            <div className='overlay-about flex flex-col items-center text-center justify-center h-[100vh] w-full'>
            <h2>~ OUR TEAM ~</h2>
            <h6 className='desc-about w-[70vw] text-center mt-20 mb-20 text-xl'>We are a dedicated team of 20+ tech support engineers focused
                 on providing the best services of CCTV camera installation in the
                  Coast Region, time attendance machines in Offices along with complete support for the installation of Wireless network.</h6>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default About