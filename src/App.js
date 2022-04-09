import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './Components/Contact';


const App = () => {
  console.log('rendered');
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Contact />
            </Route>
            {/* <Route exact path="/page">
              <SinglePage />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App