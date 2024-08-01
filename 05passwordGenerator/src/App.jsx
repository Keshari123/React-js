import { useCallback, useEffect, useState ,useRef} from 'react'


function App() {
 const [length,setLength]=useState(8)
 const [numberAllowed, setNumberAllowed]=useState(false)
 const [charaterAllowed, setCharacterAllowed]=useState(false)
 const [password, setPassword]=useState("")

 //hook useRef
 const passwordRef=useRef(null)




 const passwordgenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsuvwyz"

  if(numberAllowed) str+= "0123456789"
  if(charaterAllowed) str+="!#$%&'()*+,-./:;<=>?@[^_`{|} ~"


  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }

  setPassword(pass)

 },[length,numberAllowed,charaterAllowed,setPassword])


 const CopyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,999)
  window.navigator.clipboard.writeText(password)
 },[password])




 useEffect(()=>{
  passwordgenerator()
},[length,numberAllowed,charaterAllowed,passwordgenerator])



 
 return (
     <>
      <div className="w-full  max-w-md  max-auto  flex-column Shadow-md rounded-lg  px-4   my-4  text-orange-500   bg-gray-800">
        <h1 className='text-white  text-center rounded-lg my-3'>passwordGenerator</h1>
        <div  className='className=" flex  rounded-lg shadow   overflow-hidden pb-4 mb-4"'>
          <input
           type="text" 
           value={password}
           className='outline:none  w-full px-3 py-1'
           placeholder="password"
           readonly
           ref={passwordRef}
           />
          <button 
          onClick={CopyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> 
            copy</button>
        </div>  



          <div className='flex text-sm gap-x-2'>
            <div className=" flex items-center gap-x-1">
              <input 
                type="range" 
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label >length:{length}</label>
            </div>



            <div className='flex items-center gap-x-1'>
              <input 
                 type="checkbox" 
                 defaultChecked={numberAllowed}
                 id='numberInput'
                 onChange={(e)=>{setNumberAllowed((prev)=> !prev);
                 }}
              />
            <label >Numbers</label>
             </div>



            <div className='flex items-center gap-x-1'>
              <input 
               type="checkbox" 
               defaultChecked={charaterAllowed}
               id='numberInput'
               onChange={(e)=>{setCharacterAllowed((prev)=> !prev);
               }}
              />
              <label >Characters</label>
            </div>
          </div>
        
     </div>
     </>
  )
}

export default App
