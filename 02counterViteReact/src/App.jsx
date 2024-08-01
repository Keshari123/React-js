import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue=()=>{
    console.log("addValue",counter)
   //  counter++;
   setCounter(counter+1);
  }
  const removeValue=()=>{
    console.log("removeValue",counter)
    //counter--;
    setCounter(counter-1);
  }

  return (
    <>
      <h1>This is my First React Project</h1>
      <h2>counterValue:{counter}</h2>
      <button
      onClick={addValue}
      >Add Value{counter}</button><br />
      <button
      onClick={removeValue}
      >Remove value{counter}</button>
    </>
  )
}

export default App
