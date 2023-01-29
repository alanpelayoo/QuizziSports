import React from 'react'
import Question from './Question';

function Quiz({questions, clickHandler}) {


    function handleSubmit(event){
        event.preventDefault()
        console.log("submited")
    }
    
    return (
        <div className='container' onSubmit={handleSubmit}>
            <form>
                {questions.map((question, id) => {
                    return <Question key={id} question={question} question_id={id} clickHandler={clickHandler}/>
                })}
                <button className='start'>Check answers</button>
            </form>
        </div>
    )
}

export default Quiz