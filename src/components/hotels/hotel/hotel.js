import React from 'react';
import style from './hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

function Hotel() {
    return (
    <div className={`${style.hotelContainer} row`}>
        <div className="col-4 mt-2">
            <img src={hotelImg} alt="A photo of the hotel" className="img-fluid" />
        </div>
        <div className='col-8 mt-2'>
            <div className='row'>
                <div className='col-7'>
                    <p>Title</p>
                    <p>City</p>
                </div>
                <div className='col-5'>
                    <p>Reviews: 222</p>
                    <p>Rating: 8.3</p>
                </div>
            </div>
        </div>
        <div className='col-12 mt-2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Morbi tincidunt augue interdum velit.</p>
            <button className='btn btn-primary' style={{width: '100%', marginBottom: '10px'}}>Show</button>
        </div>
    </div>
    )
}

export default Hotel;
