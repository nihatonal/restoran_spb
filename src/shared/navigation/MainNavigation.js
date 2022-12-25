import React, { useState } from 'react';

import NavLinks from './NavLinks';
import SideNavBar from './SideNavBar';
import './MainNavigation.css';
function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    return (
        <div className='header'>
            <SideNavBar
                openDrawerHandler={openDrawerHandler}
                drawerIsOpen={drawerIsOpen}
            />
            <NavLinks />
        </div>
    );
}

export default MainNavigation;