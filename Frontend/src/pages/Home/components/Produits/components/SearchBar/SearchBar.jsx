import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ handleInput, handleFilter, filterBy, onSearchChange }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className={styles.searchBar}>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          onChange={(e) => {
            handleInput(e);
            onSearchChange(e.target.value);
          }}
          className="search-input"
        />
        <i onClick={() => setShowFilter(!showFilter)} className="search-icon">🔍</i>
      </div>
      {showFilter && (
        <div className="filter-options">
          <div onClick={handleFilter} className="filter-option">
            <input
              type="checkbox"
              id="byName"
              name="byName"
              value="byName"
              defaultChecked={filterBy.byName}
            />
            <label htmlFor="byName">Par nom</label>
          </div>
          <div onClick={handleFilter} className="filter-option">
            <input
              type="checkbox"
              id="byNote"
              name="byNote"
              value="byNote"
              defaultChecked={filterBy.byNote}
            />
            <label htmlFor="byNote">Par note</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
