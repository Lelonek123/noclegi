import React from "react";
import style from "./header.module.css";
import InspiringQuote from "./inspiringQuote/inspiringQuote.js";

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
            <InspiringQuote />
            <div className={style.bgImage} style={paralaxStyle}></div>
            {props.children}
        </header>
    );
}

export default Header;
