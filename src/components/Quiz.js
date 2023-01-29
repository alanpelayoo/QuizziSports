import React, {useState,useEffect} from 'react'
import Question from './Question';

function Quiz({questions}) {

    function handleSubmit(event){
        event.preventDefault()
        console.log("submited")
    }
    
    return (
        <div className='container' onSubmit={handleSubmit}>
            <form>
                {questions.map((question, id) => {
                    return <Question key={id} question={question} />
                })}
                <button className='start'>Check answers</button>
            </form>
        </div>
    )
}

export default Quiz