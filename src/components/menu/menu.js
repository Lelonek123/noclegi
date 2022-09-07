import React from "react";
import {Link} from "react-router-dom";
import style from "./menu.module.css";
import ThemeButton from '../UI/themeButton/themeButton.js';

function Menu(props) {
    return (
        <div className={`${style.containerMenu} container`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#">Hotels</a>
                </li>
                <li>
                    <ThemeButton changeTheme={props.changeTheme} theme={props.theme}/>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
