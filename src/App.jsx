import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import Card from './card'
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [secondcount,setSecondCount] = useState(1);
  const [operation, setOperation] = useState("suma");
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (operation == "suma"){setResult(count+ secondcount);}
    else if (operation == "resta"){setResult(count - secondcount);}
    else if (operation == "multiplicacion"){setResult(count * secondcount);}
    else {setResult(count/ secondcount)}
    document.title = `El resultado es ${result}`
  });

  return (
    <>
      <h1>¡Actividad práctica de ayudantía 2!</h1>
      <h2>La calculadora lenta</h2>
      <div>
        <a href="/Home">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => (count%10)+1)}>
          El primer sumando es {count}
        </button>
        <button onClick={() => setSecondCount((secondcount) => ((secondcount%10)+1))}>
          El segundo sumando es {secondcount}
        </button>
      </div>
      <h2>El resultado de la {operation} es: {result}</h2>
      <button id="suma" onClick={()=>setOperation("suma")}>+</button>
      <button id="resta" onClick={()=>setOperation("resta")}>-</button>
      <button id="multiplicacion" onClick={()=>setOperation("multiplicacion")}>x</button>
      <button id="division" onClick={()=>setOperation("division")}>/</button>
      <Card clase="landing-box" text="WEB EL MEJOR RAMO"/>
      <div id="left-box"/>
      <div id="right-box"/>
      <div id="top-box"/>
    </>
  )
}

export default App
