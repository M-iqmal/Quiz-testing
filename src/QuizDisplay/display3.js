import React, {Component} from 'react'
import 'survey-react/survey.css'
//import * as Survey from 'survey-react'
import '../App.css';
import Quiz3 from '../QuizPages/quiz3.js'

class display3 extends Component{
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='app'>
        <Quiz3/>
      </div>
    )
  }
}

export default display3;
