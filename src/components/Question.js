import React from 'react'

function Question({question, question_id, clickHandler, check}) {
    
    const elements = question.answers.map((answer,idx) => {
        let classes = "opt"

        if (answer.isActive){
            classes = classes + " active"
        }
        if (check){
            if (answer.isActive && answer.isCorrect){
                classes = classes + " correct"
            }else if(answer.isActive && !answer.isCorrect){
                classes = classes + " incorrect"
            }else if (answer.isCorrect){
                classes = classes + " correct"
            }
        }

        return (
            <input
            key={idx} 
            type="button"
            id="unemployed"
            name='employment'
            value={answer.name}
            // onChange={handleChange}
            // checked={formData.employment === "unemployed"}
            className={classes}
            onClick={() => clickHandler(question_id, idx)}
        />
        )
    })
    return (
        <div>
            <h2 className='q-text'>{question.question}</h2>
            <div>
                {elements}
            </div>
            <hr/>
        </div>
    )
}

export default Question