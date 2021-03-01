import React, {Component} from 'react'
import 'survey-react/survey.css'
//import * as Survey from 'survey-react'
import '../App.css';
import Quiz5 from '../QuizPages/quiz5'

class display5 extends Component{
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='app'>
        <Quiz5/>
      </div>
    )
  }
}

export default display5;
