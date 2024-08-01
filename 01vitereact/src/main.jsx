import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import Raj from './Raj'

function MyApp(){
  return(

    <div>
      <h1> This is custom app!!!</h1>
    </div>
  )
}
// const reactElement={
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank',
//   },
//   children:'click me to visit google'

  
// }

 
const anotherElement = (
 <a href="https://google.com" target="_blank">visithere</a>
)

//const anotheruser="This is raj Millionaire"
const reactElement=React.createElement(
  'a',
  { href:'https://google.com',  target:'_blank'},
  'click me here to visit google',
//anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //<Raj/>
     //<MyApp />
     //anotherElement
     //reactElement

  <App />
)
