import React from 'react'
import 'survey-react/survey.css'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'; 
import display1 from './QuizDisplay/display1.js';
import display2 from './QuizDisplay/display2.js';
import display3 from './QuizDisplay/display3.js';
import display4 from './QuizDisplay/display4.js';
import display5 from './QuizDisplay/display5.js';

function App() {
  return(
    <Router>
      <div className="App">
        <Link to="/QuizDisplay/display1">Quiz1</Link>
        <Link to="/QuizDisplay/display2">Quiz2</Link>
        <Link to="/QuizDisplay/display3">Quiz3</Link>
        <Link to="/QuizDisplay/display4">Quiz4</Link>
        <Link to="/QuizDisplay/display5">Quiz5</Link>
        <Route path="/QuizDisplay/display1" component={display1}></Route>
        <Route path="/QuizDisplay/display2" component={display2}></Route>
        <Route path="/QuizDisplay/display3" component={display3}></Route>
        <Route path="/QuizDisplay/display4" component={display4}></Route>
        <Route path="/QuizDisplay/display5" component={display5}></Route>
      </div>
    </Router>
  )
}

export default App;
