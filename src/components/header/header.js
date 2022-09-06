import React from "react";
import style from "./header.module.css";
import withMousePosition from "../hoc/withMousePosition.js";

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
            <div style={{position: 'absolute', zIndex: 2, color: 'white'}}>
                X:{props.mouseX}
                Y:{props.mouseY}
            </div>
            <div className={style.bgImage} style={paralaxStyle}></div>
            {props.children}
        </header>
    );
}

export default withMousePosition(Header);
