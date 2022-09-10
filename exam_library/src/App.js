import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Body from './Components/Body'
import About from './Components/About'
import Contact from './Components/contact'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes >
          <Route path = "/"
            element= { <Body/>}>
           
          </Route>
          <Route  path = "/home"
            element= { <Body/>}>
           
          </Route>
          <Route  path = "/about"
            element= { <About/>}>
           
          </Route>
          <Route  path = "/contact"
            element= { <Contact/>}>
           
          </Route>
        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
