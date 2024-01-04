import React from 'react';
//import './App.css';

import Tanga from './Components/Tanga/Tanga';
import StockApp from "./Components/StockApp";


function App() {
  var display = {a: <StockApp />, b: <Tanga />}
  return (
    <div className="App">
        {display.b}
    </div>
  );
}

export default App;