import React from 'react';

import SectionCard from '../../shared/UI/SectionCard';

import MainMenu from '../../assets/images/main_menu.png';
import BarMenu from '../../assets/images/bar_menu.png';

import './Menu.css';
function Menu(props) {
    const content = (<div className='menu-content'>
        <div className="menu-item">
            <div className="menu-item-content">
                <img src={MainMenu} alt="MainMenu" />
                <p className="menu-item-title">Основное меню</p>
            </div>
        </div>
        <div className="menu-item">
            <div className="menu-item-content">
                <img src={BarMenu} alt="BarMenu" />
                <p className="menu-item-title">Барная карта</p>
            </div>
        </div>
    </div>)
    return (
        <SectionCard subtitle='Меню' content={content}>
            <h2 className="section-title">
                Меню
            </h2>
            <p className="section-desc">
                At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.

            </p>
            <p className="section-desc">
                Nunc cras cras aliquet blandit faucibus massa sagittis semper.
            </p>

        </SectionCard>
    );
}

export default Menu;