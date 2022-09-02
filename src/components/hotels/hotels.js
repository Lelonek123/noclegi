import React from 'react';
import Hotel from './hotel/hotel.js'
import style from './hotels.module.css'

function Hotels(props) {
    return (
        <div className={`container ${style.hotelsContainer}`}>
            <h2>Oferta:</h2>
            {props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} />)}
        </div>
    )
}

export default Hotels;
