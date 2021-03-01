import React from 'react'
import * as Survey from 'survey-react'

const Quiz3 = () => {
    var json = {
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question1",
            "title": "Something hot",
            "choices": [
             {
              "value": "item1",
              "text": "Ice"
             },
             {
              "value": "item2",
              "text": "Lava"
             },
             {
              "value": "item3",
              "text": "Aircon"
             }
            ]
           },
           {
            "type": "text",
            "name": "question3",
            "title": "Favorite color",
            "inputType": "color"
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "checkbox",
            "name": "question5",
            "title": "What scares you?",
            "choices": [
             {
              "value": "item1",
              "text": "Ghost"
             },
             {
              "value": "item2",
              "text": "Bugs"
             },
             {
              "value": "item3",
              "text": "Clown"
             }
            ],
            "hasSelectAll": true
           },
           {
            "type": "rating",
            "name": "question4",
            "title": "How good is the product?",
            "rateMax": 10
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

export default Quiz3