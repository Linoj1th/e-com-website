import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Rout from './components/rout'; 
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home';



function App() {
  return (
    <>
    <BrowserRouter> 
           <home/>
           <NavBar/>
            <Rout/>
    </BrowserRouter>
   
    
    </>
  );
}

export default App;



