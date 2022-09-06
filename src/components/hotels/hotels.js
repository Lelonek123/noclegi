import PropTypes from 'prop-types';
import React from 'react';
import Hotel from './hotel/hotel.js'
import style from './hotels.module.css'
import BestHotel from "../hotels/bestHotel/bestHotel.js";


const propTypes = {
    hotels: PropTypes.array.isRequired
}

function Hotels(props) {

    const getBestHotel = () => {
        if (props.hotels.length < 2) {
            return null
        } else {
            return props.hotels.sort((a, b) => b-a)[0]
        }
    }

    if (props.hotels.length === 0) {
        return (
            <div className={`container ${style.hotelsContainer}`}>
                <p>No offers found!</p>
            </div>
        )
    }
    return (
        <div className={`container ${style.hotelsContainer}`}>
            <BestHotel bestHotel={getBestHotel()}/>
            <h2>Hotels ({props.hotels.length}):</h2>
            {props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} theme={props.theme}/>)}
        </div>
    )
}

Hotels.propTypes = propTypes;

export default Hotels;
