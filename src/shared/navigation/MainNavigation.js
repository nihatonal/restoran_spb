import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';

import NavLinks from './NavLinks';
import SideNavBar from './SideNavBar';
import Modal from '../UI/Modal';
import BookingForm from '../components/BookingForm';
import DeliveryBar from './DeliveryBar';

import './MainNavigation.css';
function MainNavigation(props) {
    const path = useLocation().pathname

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [bookingIsOpen, setBookingIsOpen] = useState(false);
    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    const openBookHandler = () => {
        setBookingIsOpen(true);
    }

    return (
        <div className='header'>
            <SideNavBar
                openDrawerHandler={openDrawerHandler}
                closeDrawer={closeDrawerHandler}
                drawerIsOpen={drawerIsOpen}
                onClick={() => {
                    setBookingIsOpen(true)
                    openDrawerHandler(false)
                }}
                className={bookingIsOpen ? 'hide-sidebar' : null}
            />
            {(path !== '/') ? <DeliveryBar /> : <NavLinks
                className={bookingIsOpen ? 'hide-navlinks' : null}
                onClick={openBookHandler}
            />}
            <Modal showModal={bookingIsOpen} >
                <BookingForm Close={() => setBookingIsOpen(false)} />
            </Modal>
        </div>
    );
}

export default MainNavigation;