import { useNavigate } from "react-router-dom"
import './Instructions.css'

export const Instructions = () => {
    const navigate = useNavigate();
    return (
      <div className="container">
        <h2> Quizz Instructions</h2>
        <div>
          <ol>
            <li> No data will be collected on the website regarding your responses or how many times you take the quiz.</li>
            <li> Each question in the quiz is of multiple-choice or numbers format. Read each question carefully</li>
             <li> After responding to a question, click on the "Next Question" button at the bottom to go to the next questino.</li>
          </ol>
        </div>
      <div> 
        <input type = "checkBox" className="cb"/>
        <p> i Accept all Above Instructions</p>
        <button  className = "btn" onClick = {() => {navigate("/questions")}}> start</button>
      </div>
      </div>
  
    )
  }