import React, {useState} from 'react'
import * as Survey from 'survey-react'
import {Link} from 'react-router-dom'

const Quiz4 = () => {
    
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
            "type": "radiogroup",
            "name": "question1",
            "title": "Do you have any allergies?",
            "choices": [
             {
              "value": "item3",
              "text": "No"
             }
            ],
            "hasOther": true,
            "otherText": "Yes (State)"
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question2",
            "title": "Do you have surgical history?",
            "choices": [
             {
              "value": "item1",
              "text": "No"
             }
            ],
            "hasOther": true,
            "otherText": "Yes (State)"
           }
          ]
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "comment",
            "name": "question3",
            "title": "Any other things that you want to share with the doctor?"
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

export default Quiz4