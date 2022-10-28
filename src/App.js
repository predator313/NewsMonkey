// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
// import News setProgress={this.setProgress} from './components/News setProgress={this.setProgress}';
// import News setProgress={this.setProgress}Iteams from './components/News setProgress={this.setProgress}Iteams';
import LoadingBar from 'react-top-loading-bar'

// import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
// import News from './components/News';


export default class App extends Component {
  pageSize=12;
  state={
    progress:20
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
         <Router>
          {/* <News setProgress={this.setProgress} pageSize={6} country={"in"} category={"sports"}/> */}
        <Navbar/> 
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
           {/* <News setProgress={this.setProgress} pageSize={6} country={"in"} category={"sports"}/> */}
        <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general" country="in" category="general"/>} />
        <Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general" country="in" category="general"/>} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="sports" country="in" category="sports"/>} />
        <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="science" country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="business" country="in" category="business"/>} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" country="in" category="technology"/>} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="health" country="in" category="health"/>} />
      </Routes>

      
         </Router>
          {/* <News setProgress={this.setProgress} pageSize={6} country={"in"} category={"sports"}/> */}
      </div>
    )
  }
}

