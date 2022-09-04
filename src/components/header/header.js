import React from "react";
import style from "./header.module.css";
import SearchBar from "./searchBar/searchBar.js";

function Header(props) {
    return (
        <div className={`${style.header}`}>
            <div className={style.bgImage}></div>
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}

export default Header;
