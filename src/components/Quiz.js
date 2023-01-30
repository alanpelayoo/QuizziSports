import React, {useState} from 'react'
import Question from './Question';

function Quiz({questions, clickHandler, reset}) {
    const [score,setScore] = useState(0)
    const [check,setCheck] = useState(false)
    

    function handleSubmit(event){
        event.preventDefault()
        if (!check){
            const dataSubmit = questions.map(element => {
                const answer = element.answers.filter(answer => answer.isActive)[0]
                if (answer.isCorrect){
                    setScore(prevScore => prevScore + 1)
                }
                return {question: element.question, answer:answer}
            })
            setCheck(true)
        }else{
            setScore(0)
            setCheck(false)
            reset()
        }
    }
    
    return (
        <div className='container' onSubmit={handleSubmit}>
            <form>
                {questions.map((question, id) => {
                    return <Question key={id} question={question} question_id={id} clickHandler={clickHandler} check={check}/>
                })}
                <div className='flex'>
                    {check && (<p className='q-text'>You scored {score}/5 correct answers</p>)}
                    <button className='start'>{check ? "Play again": "Check answers"}</button>
                </div>
            </form>
            
        </div>
    )
}

export default Quiz