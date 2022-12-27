import React from 'react';

import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Menu from '../components/Menu';
import Delivery from '../components/Delivery';
import Contact from '../components/Contact';

import './Main.css';
function Main(props) {
    return (
        <div className='main-container'>
            <Hero />
            <AboutUs />
            <Menu />
            <Delivery />
            <Contact />
        </div>
    );
}

export default Main;