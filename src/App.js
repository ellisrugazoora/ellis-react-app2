import React from 'react';
//import './App.css';

import Tanga from './Components/Tanga/Tanga';
import StockApp from "./Components/StockApp";
import Music from './Components/Music/Music';


function App() {
  var display = {a: <StockApp />, b: <Tanga />, c: <Music />}
  return (
    <div className="App">
        {display.b}
    </div>
  );
}

export default App;