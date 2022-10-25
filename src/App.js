// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
// import NewsIteams from './components/NewsIteams';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/> 
        <News pageSize={5}/>
        {/* <NewsIteams/> */}
      </div>
    )
  }
}

