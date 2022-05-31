// React Movie Search Project
// Allen P.
// 05/31/2022

// HeaderFooter.js
// ===============

import SearchForm from './SearchForm';
import "../App.css";

const HeaderFooter = (props) => {
  return (
    <div>
      <div className="HeaderFooter">
        <div>Movie Search App</div>
        <SearchForm />
        <div>k0mputer-n3rd</div>
      </div>
      {props.children}
      <div className="Copyright"> &copy; 2022 k0mputer-n3rd </div>
    </div>
  );
};

export default HeaderFooter;
