import React from 'react';
import style from './searchBar.module.css'

function SearchBar() {
    const [term, setTerm] = React.useState('');

    const search = () => {
        console.log(`search ${term}`);
    }

    return (
        <div className={style.searchBarContainer}>
        <input
            className="form-control"
            type="text" placeholder="Search..."
            style={{marginLeft: '10px', border: '1px solid black'}}
            value={term} 
            onChange={e => setTerm(e.target.value)}
            onKeyDown={e => {
                if (e.key == 'Enter') {
                    search();
                    setTerm('');
                }
            }}
        />
        <button 
            className="btn btn-primary" 
            style={{margin: '0 10px', border: '1px solid white'}}
            onClick={search}
        >
        Search
        </button>
        </div>
    )
}

export default SearchBar;
