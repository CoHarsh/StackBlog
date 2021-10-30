import Navbar from "./Components/Navbar";
import infomongodb from './Data/MongoDb.json'
import infogit from './Data/Git.json'
// import * as tempo from './Data'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GettheRequest from "./Components/GettheRequest";
import MainPageList from "./Components/MainPageList";
import React, { useState ,useEffect} from 'react'

function App() {

 let temp = "mongodb";
  
  return (
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <MainPageList/>
          </Route>
          <Route path={"/mongodb"}>
            <GettheRequest info={infomongodb}/>
          </Route>
          <Route path={"/git"}>
            <GettheRequest info={infogit}/>
          </Route>
        </Switch>
    </Router>
     
  );
}

export default App;
