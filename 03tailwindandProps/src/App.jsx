import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/Cards'
let myobj={
  username:"Raj",
  age:20
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind</h1>
       <Cards  username="Raj millionaire"  btntext="click here"/>
       <Cards username="techguru"   btntext="visit here"/>
    </>
  )
}

export default App
