import React from 'react';
import Hotel from './hotel/hotel.js'
import style from './hotels.module.css'

function Hotels() {
    return (
        <div className={`container ${style.hotelsContainer}`}>
            <h2>Oferta:</h2>
            <Hotel style={{color: 'red'}}/>
            <Hotel />
        </div>
    )
}

export default Hotels;
