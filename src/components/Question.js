import React,{useState,useEffect} from 'react'

function Question({question}) {
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        setAnswers([...question.incorrect_answers, question.correct_answer ])
    },[])
    
    const clickHandler = (event) =>{
        console.log(event.target)
        console.log("click")
    }
    const elements = answers.map((answer,idx) => (       
        <input
            key={idx} 
            type="button"
            id="unemployed"
            name='employment'
            value={answer}
            // onChange={handleChange}
            // checked={formData.employment === "unemployed"}
            className='opt'
            onClick={clickHandler}
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