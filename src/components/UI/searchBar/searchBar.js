import React from "react";
import style from "./searchBar.module.css";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

function SearchBar(props) {
    const [term, setTerm] = React.useState("");
    const inputRef = React.useRef();
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();


    const search = () => {
        navigate(`/search/${term}`)
    };

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className={style.searchBarContainer}>
            <input
                ref={inputRef}
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

export default SearchBar;
