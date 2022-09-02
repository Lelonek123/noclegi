import React from 'react';
import style from './menu.module.css'

function Menu() {
    return (
        <div className={`${style.containerMenu} container`}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Hotels</a></li>
            </ul>
        </div>
    )
}

export default Menu;
