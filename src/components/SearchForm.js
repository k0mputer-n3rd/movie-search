// React Movie Search Project
// Allen P.
// 05/31/2022

// SearchForm.js
// =============

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
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
