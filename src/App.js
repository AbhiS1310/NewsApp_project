import './App.css';
import React, { useState } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" pagesize={6} country="in" category="general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" pagesize={6} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pagesize={6} country="in" category="entertainment" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" pagesize={6} country="in" category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" pagesize={6} country="in" category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" pagesize={6} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pagesize={6} country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )

}