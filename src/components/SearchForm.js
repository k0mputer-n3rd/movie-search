// React Movie Search Project
// Allen P.
// 05/31/2022

// SearchForm.js
// =============

import React from "react";

const SearchForm = () => {
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
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
