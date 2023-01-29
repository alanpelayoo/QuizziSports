import Start from './components/Start';
import Quiz from './components/Quiz';
import React, {useState, useEffect} from 'react'

function App() {
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  
  const api_trivia = "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple";
  //api link: https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple

  const startQuiz = () =>{
    fetch(api_trivia)
      .then(res => {
        setLoading(true)
        return res.json()
      })
      .then(data => {
        setQuestions(data.results)
        setLoading(false)
        setStarted(true)
      })
  }
  
  return (
    <div className="main">
      {!started ? <Start startHandler={startQuiz} loading={loading} /> : (
        <Quiz questions={questions}/>
      )}

    </div>
  );
}

export default App;
