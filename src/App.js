// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
// import NewsIteams from './components/NewsIteams';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
         <Router>

        <Navbar/> 
        {/* <News pageSize={6} country={"in"} category={"sports"}/> */}
        <Routes>
        <Route exact path="/general" element={<News pageSize={6} key="general" country="in" category="general"/>} />
        <Route exact path="/general" element={<News pageSize={6} key="general" country="in" category="general"/>} />
        <Route exact path="/sports" element={<News pageSize={6} key="sports" country="in" category="sports"/>} />
        <Route exact path="/science" element={<News pageSize={6} key="science" country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News pageSize={6} key="entertainment" country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News pageSize={6} key="business" country="in" category="business"/>} />
        <Route exact path="/technology" element={<News pageSize={6} key="technology" country="in" category="technology"/>} />
        <Route exact path="/health" element={<News pageSize={6} key="health" country="in" category="health"/>} />
      </Routes>

      
         </Router>
      </div>
    )
  }
}

