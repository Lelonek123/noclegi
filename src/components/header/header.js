import React from "react";
import style from "./header.module.css";

function Header(props) {
    return (
        <div className={`${style.header}`}>
            <div className={style.bgImage}></div>
            {props.children}
        </div>
    );
}

export default Header;
