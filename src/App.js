import React from 'react';
import PropTypes from 'prop-types';

function Test2({food}){
  return <h1>hihi {food} </h1>
}

const foodIlike = ['stake', 'ramen', 'KFC', 123]
Test2.propTypes = {
  food : PropTypes.string.isRequired
}

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
