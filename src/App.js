import React from 'react';

function Test2(props){
  return <h1>hihi {props.food} </h1>
}

const foodIlike = ['stake', 'ramen', 'KFC']


function renderTest(names){
    return <Test2 food={names} />
}


function App() {
  return (
    <div>HELLO!!
    {foodIlike.map(renderTest)}


    </div>
  );
}

export default App;
