import React from 'react';
import { NavLink } from "react-router-dom";

import './NavLinks.css';
function NavLinks(props) {
    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            {props.children}
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/menu"
                onClick={props.closeDrawer}
            >
                Меню
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/delivery"
                onClick={props.closeDrawer}
            >
                Доставка
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/pay"
                onClick={props.closeDrawer}
            >
                Оплата
            </NavLink>
            <button className='nav-item delivery-btn' onClick={props.onClick}>Бронь столика</button>
        </div>
    );
}

export default NavLinks;