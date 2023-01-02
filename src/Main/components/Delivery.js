import React from 'react';
import SectionCard from '../../shared/UI/SectionCard';


import './Delivery.css';
function Delivery(props) {
    const content = (<div className='delivery-content'>
        <div className="delivery-btns-wrapper">
            <button className="delivery_btn">Подробнее</button>
            <button className="delivery_btn">Условия доставки</button>
        </div>

    </div>)
    return (
        <SectionCard subtitle='доставка' content={content}>
            <h2 className="section-title">
                Служба
                доставки
            </h2>
            <p className="section-desc">
                Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse. Semper aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum euismod sapien.
            </p>
        </SectionCard>
    );
}

export default Delivery;