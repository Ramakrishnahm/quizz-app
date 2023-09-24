import Card from "./Card";
import { data } from "./data";
import  './cards.css'


const Cards = () => {
  return (
    <div className="cards">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};
export default Cards;