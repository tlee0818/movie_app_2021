import React from 'react';

const favFoods = [
  {id: 1,
    name: "kimchi",
    spicy: true},
  {id: 2,
    name: "dontaktsu",
    spicy: false},
  {id:3,
    name: "삼겹",
    spicy: false},
  {id: 4,
    name: "ramen",
    spicy: true},
  {id: 5,
    name: "life",
    spicy: true}];
    
function Food(props){
  return <div>
    <h1>I like {props.name}</h1>
    <h2>It is {props.spicy? "spicy": "not spicy"}</h2>
    </div>
}

function renderFood(dish){
  return <Food key = {dish.id} name = {dish.name} spicy = {dish.spicy}/>
}






function App() {
  return (
    <div className="App">
      {favFoods.map(renderFood)}
    </div>
  );
}

export default App;
