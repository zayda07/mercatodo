import React from "react";
import "./Search.css";

const Search = ({ handleChange, searchTitle }) => {
    return (
        <div className="searchSection" id="search">
            <input
                type="text"
                id="filter"
                placeholder="Search......."
                onChange={handleChange}
                value={searchTitle}
            />
        </div>
    );
};

export default Search;
