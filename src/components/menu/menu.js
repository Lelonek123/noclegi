import React from "react";
import style from "./menu.module.css";
import ThemeButton from '../UI/themeButton/themeButton.js';

function Menu(props) {
    const changeTheme = () => {
        props.changeTheme();
    };

    return (
        <div className={`${style.containerMenu} container`}>
            <ul>
                <li>
                    <a href="#">Home</a>
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
