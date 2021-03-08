import React, {useState} from 'react'
import * as Survey from 'survey-react'
import {Link} from 'react-router-dom'

const Quiz5 = () => {
    
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
            "type": "imagepicker",
            "name": "question1",
            "title": "Which animal is giraffe?",
            "choices": [
             {
              "value": "lion",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
             },
             {
              "value": "giraffe",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
             },
             {
              "value": "panda",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
             },
             {
              "value": "camel",
              "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
             }
            ]
           },
           {
            "type": "text",
            "name": "question2",
            "title": "What's your favorite colour?",
            "inputType": "color"
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

export default Quiz5