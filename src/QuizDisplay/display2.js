import React, {Component} from 'react'
import 'survey-react/survey.css'
//import * as Survey from 'survey-react'
import '../App.css';
import Quiz2 from '../QuizPages/quiz2'

class display2 extends Component{
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='app'>
        <Quiz2/>
      </div>
    )
  }
}

export default display2;
