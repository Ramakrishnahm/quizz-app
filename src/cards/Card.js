import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './card.css'
const Card = (props) => {
const {title,description} = props.data
  
  
  const navigate = useNavigate();
 
 
  const [colors] = useState(["green", "yellow", "lightblue", "black"]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * (colors.length - 1 - 0) + 0);
    return colors[randomIndex];
  };

  return (
    <div className="cardlist" style={{ backgroundColor: getRandomColor() }}>
      <div> 
       
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="btn" onClick = {() => {navigate("/Instructions")}} >
          Start-Quizz
        </button>
      </div>
    </div>
  );
};
export default Card;