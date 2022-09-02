import React from 'react';
import style from './hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

function Hotel(props) {
    return (
    <div className={`${style.hotelContainer} row`}>
        <div className="col-4 mt-2">
            <img src={hotelImg} alt="A photo of the hotel" className="img-fluid" />
        </div>
        <div className='col-8 mt-2'>
            <div className='row'>
                <div className='col-7'>
                    <p>{props.name}</p>
                    <p>{props.city}</p>
                </div>
                <div className='col-5'>
                    <p>{`Reviews: ${props.reviews}`}</p>
                    <p>{`Rating: ${props.rating}`}</p>
                </div>
            </div>
        </div>
        <div className='col-12 mt-2'>
            <p>{props.description}</p>
            <button className='btn btn-primary' style={{width: '100%', marginBottom: '10px'}}>Show</button>
        </div>
    </div>
    )
}

export default Hotel;
