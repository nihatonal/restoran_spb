import React from 'react';

import Logo from '../../assets/images/logo.png';
import Close from '../../assets/icons/close.svg';
import { useForm } from "../../shared/hooks/booking-hook";
import Input from './formElements/Input';
import {
    VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import './BookingForm.css'
function BookingForm(props) {
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
            guest: {
                value: "",
                isValid: false,
            },
            time: {
                value: "",
                isValid: false,
            },
        },
        false
    );
    const bookingHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs)

    }
    return (
        <div className='booking-wrapper'>
            <div className="booking-header">
                <img src={Logo} alt="log" />
                <img src={Close} alt="close" className="close-icon" onClick={props.Close} />
                <p className="booking-header-title">Забронировать столик</p>
            </div>
            <form onSubmit={bookingHandler} className="booking-form">
                <Input
                    element="input"
                    id="name"
                    type="text"
                    placeholder='Имя'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}
                    classInput='input_wide'
                />
                <Input
                    element="input"
                    id="phone"
                    type="text"
                    placeholder='Телефон'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}
                    classInput='input_wide'
                />
                <Input
                    element="input"
                    id="guest"
                    type="text"
                    placeholder='Гостей'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}

                />
                <Input
                    element="input"
                    id="time"
                    type="text"
                    placeholder='Время'
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}

                />
                <button type="submit" className="booking-form-btn">Забронировать</button>
            </form>
        </div>
    );
}

export default BookingForm;