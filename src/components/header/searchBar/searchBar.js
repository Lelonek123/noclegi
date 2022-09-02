import React from 'react';

function SearchBar() {
    return (
        <>
        <input className="form-control" type="text" placeholder="Search..." style={{marginLeft: '10px'}}/>
        <button className="btn btn-primary" style={{margin: '0 10px'}}>
        Search
        </button>
        </>
    )
}

export default SearchBar;
