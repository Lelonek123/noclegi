import React from "react";
import PropTypes from "prop-types";
import style from "./searchBar.module.css";

const propTypes = {
    onSearch: PropTypes.func.isRequired,
};

function SearchBar(props) {
    const [term, setTerm] = React.useState("");

    const search = () => {
        props.onSearch(term);
    };

    return (
        <div className={style.searchBarContainer}>
            <input
                className="form-control"
                type="text"
                placeholder="Search..."
                style={{ marginLeft: "10px", border: "1px solid black" }}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        search();
                        setTerm("");
                    }
                }}
            />
            <button
                className={`btn btn-${props.theme}`}
                style={{ margin: "0 10px", border: "1px solid white" }}
                onClick={search}
            >
                Search
            </button>
        </div>
    );
}

SearchBar.propTypes = propTypes;

export default SearchBar;
