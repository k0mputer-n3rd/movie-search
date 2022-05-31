// React Movie Search Project
// Allen P.
// 05/31/2022

// App.js
// ======

import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';
import "./App.css";

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
