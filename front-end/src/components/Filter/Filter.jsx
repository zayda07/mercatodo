import React from "react";
import "./Filter.css";

const Filter = ({ handleChange, search }) => {
    return (
        <div className="filterSection">
            <input
                type="text"
                id="filter"
                placeholder="Seleccione una opción"
                onChange={handleChange}
            />
        </div>
    );
};

export default Filter;
