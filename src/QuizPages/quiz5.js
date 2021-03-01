import React from 'react'
import * as Survey from 'survey-react'

const Quiz = () => {
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
       <Survey.Survey
        json={json}
        />
    )
}

export default Quiz