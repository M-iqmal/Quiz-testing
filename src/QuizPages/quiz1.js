import React from 'react'
import * as Survey from 'survey-react'

const Quiz1 = () => {
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
       <Survey.Survey
        json={json}
        />
    )
}

export default Quiz1