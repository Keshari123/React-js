
import { useState} from "react"
function App() {
  const [color, setColor ] = useState("olive")

  return (
    <>
     <div className="w-full  h-screen  duration-200"
       style={{backgroundColor:color}}
       >
       <div className="fixed flex  flex-wrap  justify-center  bottom-12  inset-x-0  px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-2 py-3 rounded-3xl">
          <button 
          onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
           style={{backgroundColor:"red"}}>
            red
          </button>
          <button 
            onClick={()=>{setColor("green")}}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
           style={{backgroundColor:"green"}}>
            green
          </button>
          <button 
            onClick={()=>{setColor("lavender")}}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
           style={{backgroundColor:"lavender"}}>
            lavender
          </button>
          <button 
            onClick={()=>{setColor("black")}}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
           style={{backgroundColor:"black"}}>
            black
          </button>
          <button 
            onClick={()=>{setColor("yellow")}}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
           style={{backgroundColor:"yellow"}}>
            yellow
          </button>
          <button 
            onClick={()=>{setColor("blue")}}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
           style={{backgroundColor:"blue"}}>
            Blue
          </button>
        </div>
        
       </div>
     </div>
    </>
  )
}

export default App
