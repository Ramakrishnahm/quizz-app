import { useState } from "react";
import './card.css'
const Card = ({data}) => {
 
  const { title, questions } = data;
  const [colors] = useState(["green", "yellow", "lightblue", "black"]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * (colors.length - 1 - 0) + 0);
    return colors[randomIndex];
  };

  return (
    <div className="cardlist" style={{ backgroundColor: getRandomColor() }}>
      <div>
        <h1>{title}</h1>
        <p>{questions}</p>
        <button className="btn">
          Start-Quizz
        </button>
      </div>
    </div>
  );
};
export default Card;