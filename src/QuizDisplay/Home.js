import React, {Component} from 'react'
import 'survey-react/survey.css'
//import * as Survey from 'survey-react'
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import display1 from './display1.js';
import display2 from './display2.js';
import display3 from './display3.js';
import display4 from './display4.js';
import display5 from './display5.js';

class Home extends Component{
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
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
}

export default Home;