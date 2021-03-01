import React from 'react'
import * as Survey from 'survey-react'

const Quiz2 = () => {
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
       <Survey.Survey
        json={json}
        />
    )
}

export default Quiz2