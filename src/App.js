// React Movie Search Project
// Allen P.
// 06/08/2022

// App.js
// ======

import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';
import "./App.css";

// Need to add useState for searchValue and setSearchValue

function App() {
  return (
    <div className="App">
      <HeaderFooter>
        <Home />
      </HeaderFooter>
    </div>
  );
}

export default App;
