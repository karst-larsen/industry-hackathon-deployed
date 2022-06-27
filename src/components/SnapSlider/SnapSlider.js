import './SnapSlider.scss'
import bookAppointment from '../../assets/images/BookAppointment.svg'
import openAccount from '../../assets/images/OpenAccount.svg'
import canadianWeather from '../../assets/images/CanadianWeather.svg'

import React from 'react';

function SnapSlider() {
    return (
        <div className="snap-slider">
            <img src={openAccount} alt="Open Account" className="snap-slider__image--2" />
            <img src={bookAppointment} alt="Booking Appointment" className="snap-slider__image--1" /> 
            <img src={canadianWeather} alt="Canadian Weather" className="snap-slider__image--3" />
        </div>
    );
}

export default SnapSlider;