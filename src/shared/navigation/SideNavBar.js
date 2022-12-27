import React from 'react';

import Logo from '../../assets/images/logo.png';
import Hamburger from './Hamburger';
import SocialBar from './SocialBar';
import NavLinks from './NavLinks';
import './SideNavBar.css';
function SideNavBar(props) {

    return (
        <div className={props.drawerIsOpen ? `sidebar_wrapper open_sidebar` : `sidebar_wrapper ${props.className}`}>
            <div className='sidebar-header'>
                <img src={Logo} alt='logo' />

                <Hamburger
                    show={props.drawerIsOpen}
                    onClick={props.openDrawerHandler}
                />
            </div>
            <NavLinks
                style={props.drawerIsOpen ? { opacity: '1' } : null}
                className='sidebar-navlinks'
                onClick={props.onClick}
                closeDrawer={props.closeDrawer} />
            <SocialBar />
        </div>
    );
}

export default SideNavBar;