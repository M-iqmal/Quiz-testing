import React, {useState} from 'react'
import * as Survey from 'survey-react'
import {Link} from 'react-router-dom'

const Quiz1 = () => {
    
    const [fin, setFin] = useState(false)
    
    const doOnComplete = (survey) => {
        alert("The results are:" + JSON.stringify(survey.data));
        setFin(true)
    }

    const finisedQuiz = (survey) =>{
    survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });
    <Link to= "/">Home</Link>
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
        <Survey.Survey
        finisedPage = {finisedQuiz}
        />
        ):(
       <Survey.Survey
        json={json}
        onComplete = {doOnComplete}
        />
        )
    )
}

export default Quiz1