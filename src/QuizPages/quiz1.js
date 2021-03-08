import React, {useState} from 'react'
import * as Survey from 'survey-react'
import {Link} from 'react-router-dom'

const Quiz1 = () => {
    
    const [fin, setFin] = useState(false)
    
    const doOnComplete = (survey) => {
        setFin(true)
    }


    var json = {
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "text",
            "name": "question1",
            "title": "Name"
           },
           {
            "type": "text",
            "name": "question2",
            "title": "Age"
           },
           {
            "type": "dropdown",
            "name": "question3",
            "title": "Gender",
            "choices": [
             {
              "value": "item1",
              "text": "Male"
             },
             {
              "value": "item2",
              "text": "Female"
             }
            ]
           }
          ]
         }
        ]
    }

    
    return (
        fin ? (
        <div>
            <h2>Thank You For Finishing This Survey :)</h2>
            <Link to="/">Home</Link>
        </div>
        ):(
       <Survey.Survey
        json={json}
        onComplete = {doOnComplete}
        showPreviewBeforeComplete = 'showAnsweredQuestions'
        />
        )
    )
}

export default Quiz1