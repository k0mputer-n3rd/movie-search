// React Movie Search Project
// Allen P. & Jeremy T.
// 06/08/2022

// SearchForm.js
// =============

// use searchValue for value, setSearchValue on change/submit

import React from "react";
import "../App.css";

const SearchForm = (props) => {

  return (
    <div>
      <form>
        <div className="search-field">
          <label className="label" htmlFor="Search-Field">
            Search for:
          </label>
          <input
            className="inputbox"
            name="Search-Field"
            type="text"
            autoComplete="off"
            value={props.searchValue}
            onChange={(e) => props.setSearchValue(e.target.value)}
          />
          <button type="submit">
            <span class="material-symbols-outlined">search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
