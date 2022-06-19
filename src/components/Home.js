// React Movie Search Project
// Allen P.
// 06/08/2022

// Home.js
// =======

// Add searchValue to display on screen (xxx)

// import useContext form React
import { useContext } from "react";
// import SearchContext from App.js
import { SearchContext } from '../App' 

const Home = () => {

  const { searchValue } = useContext(SearchContext);

  return (
    <div>
      <h1>This is a home page test.</h1>
      <p >The search value is: {searchValue}</p>
    </div>
  )
}

export default Home;
