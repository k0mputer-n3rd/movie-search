// React Movie Search Project
// Allen P.
// 05/31/2022

// HeaderFooter.js
// ===============

import SearchForm from './SearchForm';
import "../App.css";
// import useContext form React
import { useContext } from "react";
// import SearchContext from App.js
import { SearchContext } from '../App' 

const HeaderFooter = (props) => {

  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div>
      <div className="HeaderFooter">
        <div>Movie Search App</div>
        <SearchForm 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <div>k0mputer-n3rd</div>
      </div>
      {props.children}
      <div className="Copyright"> &copy; 2022 k0mputer-n3rd & OceanSkys </div>
    </div>
  );
};

export default HeaderFooter;
