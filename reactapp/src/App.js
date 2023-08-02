import { useState } from 'react';
import Button from './components/UI/Button/Button';
import Card from './components/UI/Card/Card';
import Banner from './components/UI/Banner/Banner';

function App() {

  const[start,setStart] = useState(true);
  const[attempt,correctAnswerMarkUpdate]=useState(0);
  const[qsnAttempt,setQsnsAttempt]=useState(0);
  const[card,setCard]=useState(false);
  const[result,setResult]=useState(false);
  const[banner,setBanner]=useState(false);

  const handleStart=()=>{
    setStart(false)
    setCard(false)
    correctAnswerMarkUpdate(0)
    setQsnsAttempt(0)
    setBanner(false)
  }
  const opt={
    option1:"Blue",option2: "Red",option3:"Yellow",option4:"Green"
  }
  const questions=[{question:"what color are the leaves?",answer:"Green"},{question:"what color is the sky",answer:"Blue"}]
  const handleResult=()=>{
    setStart(true)
    setBanner(true)
    setCard(true)
    setResult(false)
  }

  return(
    <div className="flex justify-center mt-4">
      <div>
        <div className="flex items-center justify-center space-x-4 mb-12">
          <h1 className="text-3x1">Quizz App</h1>
          <i className=''>learn react</i>
        </div>
            { start && <Button onClick={handleStart} style={"bg-orange-300 px-10 py-2 rounded hover:bg-orange-400"}> startquiz</Button>}
            { banner && <Banner score={attempt}></Banner>}
          { card && <div> {questions.map((q,index)=>(
               <Card key={index} question={q.question} correctAnswerMarkUpdate={correctAnswerMarkUpdate} attempt={attempt} options={opt}></Card>
            ))}
        </div>}
        {result && <Button onClick={handleResult} style="bg-orange-300 px-10 py-2 rounded hover:bg-orange-400 mt-3"></Button>}
        
      </div>
    </div>
  )
} 
export default App;
