import React, {useState} from 'react'
import * as Survey from 'survey-react'
import {Link} from 'react-router-dom'

const Quiz2 = () => {
    
    const [fin, setFin] = useState(false)
    
    const doOnComplete = (survey) => {
        alert("The results are:" + JSON.stringify(survey.data));
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
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "text",
            "name": "question4",
            "title": "Age"
           }
          ]
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "dropdown",
            "name": "question2",
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
                <h1>Custom Thank You</h1>
                <Link to="/">Home</Link>
            </div>
        ):(
        <Survey.Survey
        json={json}
        onComplete = {doOnComplete}
        />
        )
    )
}

export default Quiz2