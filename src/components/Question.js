import React from 'react'

function Question({question, question_id, clickHandler}) {
    
    

    const elements = question.answers.map((answer,idx) => (       
        <input
            key={idx} 
            type="button"
            id="unemployed"
            name='employment'
            value={answer.name}
            // onChange={handleChange}
            // checked={formData.employment === "unemployed"}
            className={answer.isActive ? 'opt active': 'opt'}
            onClick={() => clickHandler(question_id, idx)}
        />
    ))
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