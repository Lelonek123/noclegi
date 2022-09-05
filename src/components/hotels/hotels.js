import PropTypes from 'prop-types';
import React from 'react';
import Hotel from './hotel/hotel.js'
import style from './hotels.module.css'

const propTypes = {
    hotels: PropTypes.array.isRequired
}

function Hotels(props) {
    return (
        <div className={`container ${style.hotelsContainer}`}>
            <h2>Oferta:</h2>
            {props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} theme={props.theme}/>)}
        </div>
    )
}

Hotels.propTypes = propTypes;

export default Hotels;
