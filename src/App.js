import React from 'react';

function Test2(props){
  return <h1>hihi {props.name2} </h1>
}

function App() {
  return (
    <div>HELLO!!
    <Test2 name='hola' name2 = 'hohoh'/>

    </div>
  );
}

export default App;
