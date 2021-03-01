import React, {Component} from 'react'
import 'survey-react/survey.css'
//import * as Survey from 'survey-react'
import '../App.css';
import Quiz1 from '../QuizPages/quiz1.js'

class display1 extends Component{
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='app'>
        <Quiz1/>
      </div>
    )
  }
}

export default display1;
