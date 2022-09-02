import React from 'react';
import style from "./header.module.css"
import SearchBar from "./searchBar/searchBar.js";

function Header() {
    return (
        <div className={`${style.header}`}>
            <div className={style.bgImage}></div>
            <SearchBar />
        </div>
    )
}

export default Header;
