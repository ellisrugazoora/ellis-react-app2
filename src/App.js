import React from 'react';
//import './App.css';

import Tanga from './Components/Tanga/Tanga';
import StockApp from "./Components/StockApp";
import Music from './Components/Music/Music';

import { Box, ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';
import Chat from './Components/Chat';
import ChatOpenAInpm from './Components/ChatOpenAInpm';

function App() {
  var display = {a: <StockApp />, b: <Tanga />, c: <Music />, d: <Chat />, e: <ChatOpenAInpm /> }
  return (
    <ChakraProvider>
      
      <Box className="App" width={"100%"}>
        {display.e}
      </Box>
      
    </ChakraProvider>
      
    
    
  );
}

export default App;