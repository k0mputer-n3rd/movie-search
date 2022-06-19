// React Movie Search Project
// Allen P.
// 06/08/2022

// App.js
// ======

import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';
import "./App.css";
// Have to import creatContext to create the useContext we want to make
import { createContext, useState } from "react";
// Need to add useState for searchValue and setSearchValue

// This creates the context and exports it for other components to use
export const SearchContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      {/* Here we use our useContext, SearchContext, and wrap it around other components and give it our useState values so these components can use it */}
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <HeaderFooter >
          <Home/>
        </HeaderFooter>
        </SearchContext.Provider>
    </div>
  );
}

export default App;
