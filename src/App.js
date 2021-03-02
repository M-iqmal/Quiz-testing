import React from 'react'
import 'survey-react/survey.css'
import './App.css';
import Home from './QuizDisplay/Home.js';
import display1 from "./QuizDisplay/display1.js"
import display2 from "./QuizDisplay/display2.js"
import display3 from "./QuizDisplay/display3.js"
import display4 from "./QuizDisplay/display4.js"
import display5 from "./QuizDisplay/display5.js"
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

function App() {
  return(
    <Router>
      <div className="App">
        <Switch> 

          <Route path="/" exact component={Home}/>
          <Route path="/QuizDisplay/display1" component={display1}/>
          <Route path="/QuizDisplay/display2" component={display2}/>
          <Route path="/QuizDisplay/display3" component={display3}/>
          <Route path="/QuizDisplay/display4" component={display4}/>
          <Route path="/QuizDisplay/display5" component={display5}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
