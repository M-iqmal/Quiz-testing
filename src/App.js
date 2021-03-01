import React, {Component} from 'react'
import 'survey-react/survey.css'
//import * as Survey from 'survey-react'
import './App.css';
import Quiz from './QuizPages/quiz'

class App extends Component{
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='app'>
        <Quiz/>
      </div>
    )
  }
}

export default App;
