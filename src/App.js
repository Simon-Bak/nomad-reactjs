import React from 'react';

function Test2(props){
  return <h1>hihi {props.food} </h1>
}

const foodIlike = ['stake', 'ramen', 'KFC']

function App() {
  return (
    <div>HELLO!!
    {foodIlike.map(dish => <Test2 food={dish} />)}


    </div>
  );
}

export default App;
