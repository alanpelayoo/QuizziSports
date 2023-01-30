import Start from './components/Start';
import Quiz from './components/Quiz';
import React, {useState } from 'react'

function App() {
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  
  const clickHandler = (id_1, id_2) => {
    const new_state = []

    for (let i=0; i<questions.length; i++){
      if(i === id_1){
        const new_answers = []
        for (let x=0; x<questions[i].answers.length; x++){
          if (x === id_2){
            new_answers.push({...questions[i].answers[x], isActive:true})
          }else{
            new_answers.push({...questions[i].answers[x], isActive:false})
          }
        }
        new_state.push({...questions[i], answers:new_answers})

      }else{
        new_state.push(questions[i])
      }
    }
    setQuestions(new_state)
  }

  const api_trivia = "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple";

  const processData = (data) => {
    return data.results.map(item => {
      const answers = item.incorrect_answers.map(answer => (
          { name: decodeHtml(answer), isActive:false, isCorrect:false}
        ))
      const correctAns = {name: item.correct_answer, isActive:false, isCorrect:true
      }
      answers.splice(Math.floor(Math.random() * 5),0, correctAns)

      return { 
        question: decodeHtml(item.question), 
        answers:answers
      }
    })
  }

  const startQuiz = async () =>{
    setLoading(true)
    const res = await fetch(api_trivia)
    const data = await res.json()
    const data_p = processData(data) // maybe we can can change processData to return a function
    setQuestions(data_p)
    setLoading(false)
    setStarted(true)
  }

  return (
    <div className="main">
      {!started ? <Start startHandler={startQuiz} loading={loading} /> : (
        <Quiz questions={questions} clickHandler={clickHandler} reset={startQuiz}/>
      )}

    </div>
  );
}

export default App;
