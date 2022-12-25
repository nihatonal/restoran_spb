import React from 'react';

import Logo from '../../assets/images/logo.png';
import Hamburger from './Hamburger';
import SocialBar from './SocialBar';
import './SideNavBar.css';
function SideNavBar(props) {
    return (
        <div className='sidebar_wrapper'>
            <div className='sidebar-header'>
                <img src={Logo} alt='logo' />
                <Hamburger

                    show={props.drawerIsOpen}
                    onClick={props.openDrawerHandler}
                />
            </div>

            <SocialBar />
        </div>
    );
}

export default SideNavBar;