import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Modal from '../UI/Modal';
import BookingForm from '../components/BookingForm';
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import './Contact.css';
function Contact(props) {
    const cart = useContext(CartContext)

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <p className="section-suptitle">
                    контакты <span></span>
                </p>
                <div className="contact-content-left">
                    <div className="content-left-item">
                        <h2 className="left-item-title">2 <p className="left-item-subtitle">мин</p></h2>

                        <p className="left-item-desc">из центра <br></br>Санкт-Петербурга</p>
                    </div>
                    <div className="content-left-item">
                        <h2 className="left-item-title">12 <p className="left-item-subtitle">мин</p></h2>

                        <p className="left-item-desc">из города <br></br>Зеленогорск</p>
                    </div>
                    <div className="content-left-item">
                        <h2 className="left-item-title">42 <p className="left-item-subtitle">мин</p></h2>

                        <p className="left-item-desc">из аэропорта <br></br>Пулково</p>
                    </div>
                    <div className="content-left-item">
                        <h2 className="left-item-title">52 <p className="left-item-subtitle">мин</p></h2>

                        <p className="left-item-desc">из города <br></br>Павловск</p>
                    </div>
                </div>
                <div className="contact-content-right">
                    <div className="contact-content-right-wrapper">
                        <a href="https://www.google.com/maps/place/Severnaya+Doroga,+11,+Sankt-Peterburg,+197110/data=!4m2!3m1!1s0x4696369463de2eb7:0xe6fc5dbc72434a9c?sa=X&ved=2ahUKEwjUs8ir9Jn8AhU9DRAIHWMUDNsQ8gF6BAgJEAE" target='_blank' rel="noreferrer" className="contact-item">
                            <IoLocationSharp className='contact-icon' /> Severnaya Doroga, 11, Sankt-Peterburg, 197110
                        </a>
                        <a href="tel:+7 (921) 777-77-77" className="contact-item">
                            <BsFillTelephoneFill className='contact-icon' /> +7 (921) 777-77-77
                        </a>
                        <p className="title-work-schedule">Время работы</p>
                        <p className="work-schedule-item">Вск-Чт <span>с 12:00 до 23:00</span></p>
                        <p className="work-schedule-item">Пт-Сб <span>с 12:00 до 03:00</span></p>
                        <div className="contact-btns">
                            <button
                                className="contact-btn"
                                onClick={() => cart.modalHandler(true)}>Бронь столика</button>
                            <button className="contact-btn">Задать вопрос</button>
                        </div>
                    </div>
                </div>
                <Modal showModal={cart.booking} >
                    <BookingForm Close={() => cart.modalHandler(false)} />
                </Modal>
            </div>


        </div >
    );
}

export default Contact;