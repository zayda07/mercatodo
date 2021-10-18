import React from "react";
import "./Search.css";

const Search = ({ handleChange, search }) => {
    return (
        <div className="searchSection" id="search">
            <input
                type="text"
                id="filter"
                placeholder="Search......."
                onChange={handleChange}
                value={search}
            />
        </div>
    );
};

export default Search;
