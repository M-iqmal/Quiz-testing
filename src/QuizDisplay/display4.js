import React, {Component} from 'react'
import 'survey-react/survey.css'
//import * as Survey from 'survey-react'
import '../App.css';
import Quiz4 from '../QuizPages/quiz4.js'

class display4 extends Component{
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='app'>
        <Quiz4/>
      </div>
    )
  }
}

export default display4;
