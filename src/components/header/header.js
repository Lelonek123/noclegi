import React from "react";
import style from "./header.module.css";

function Header(props) {
    const paralaxStyle = {
        transform: `translate(
            ${props.mouseX / -60}px,
            ${props.mouseY / -100}px
        )`,

    }

    return (
        <header
        className={`${style.header}`}>
            <div className={style.bgImage} style={paralaxStyle}></div>
            {props.children}
        </header>
    );
}

export default Header;
