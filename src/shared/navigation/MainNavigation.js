import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import NavLinks from './NavLinks';
import SideNavBar from './SideNavBar';
import Modal from '../UI/Modal';
import BookingForm from '../components/BookingForm';
import DeliveryBar from './DeliveryBar';

import './MainNavigation.css';
function MainNavigation(props) {
    const path = useLocation().pathname
    const cart = useContext(CartContext)
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
                closeDrawer={closeDrawerHandler}
                drawerIsOpen={drawerIsOpen}
                onClick={() => {
                    cart.modalHandler(true)
                    openDrawerHandler(false)
                }}
                className={cart.booking ? 'hide-sidebar' : null}
            />
            {(path !== '/') ? <DeliveryBar /> : <NavLinks
                className={cart.booking ? 'hide-navlinks' : null}
                onClick={() => cart.modalHandler(true)}
            />}
            <Modal showModal={cart.booking} >
                <BookingForm Close={() => cart.modalHandler(false)} />
            </Modal>
        </div>
    );
}

export default MainNavigation;