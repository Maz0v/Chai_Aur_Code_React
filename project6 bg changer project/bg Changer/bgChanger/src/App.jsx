import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}
     >
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
       <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"violet"}}>VIOLET</button>
       <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>BLUE</button>
       <button onClick={() => setColor("lightblue")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lightblue"}}>SKY</button>
       <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"green"}}>GREEN</button>
       <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>YELLOW</button>
       <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"orange"}}>ORANGE</button>
       <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"red"}}>RED</button>

       </div>
       </div>
     </div>
    </>
  )
}

export default App
