import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import AuthContextProvider from './Components/Context/AuthContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <AuthContextProvider>
<BrowserRouter>
<ChakraProvider>
    <App />
    </ChakraProvider>
   
    </BrowserRouter>
    </AuthContextProvider>

 
   
  
);

