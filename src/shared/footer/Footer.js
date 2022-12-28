import React from 'react';

import Logo from '../../assets/images/logo.png';
import './Footer.css';
function Footer(props) {
    return (
        <div className='footer-container'>
            <div className="footer-wrapper">
                <img src={Logo} alt="logo" />
                <p className='footer-item'>Политика конфиденциальности</p>
                <p className='footer-item'>&copy; Copyright 2018, Example Corporation. All rights reserved.</p>
            </div>

        </div>
    );
}

export default Footer;