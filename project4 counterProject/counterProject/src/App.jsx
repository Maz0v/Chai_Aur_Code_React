import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// using usestate  to change the state or update the variables it returns an array where first element is the variable
// and 2 nd element is a function which manipulates the value of the variable
  let [counter,setCounter] = useState(5)
 // let counter = 5
  
  const addValue =  () =>{
   // console.log("value added",  Math.random())
   
    if(counter < 20){
    counter = counter + 1
    setCounter(counter)
    }
   console.log("clicked" , counter)
  }

  const removeValue =  () =>{
    // console.log("value added",  Math.random())
    
     if(counter >0 ){
      counter -=  1
     setCounter(counter)
     }
    console.log("clicked" , counter)
   }
  return (
    <>
      <script></script>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Increase Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Decrease Value</button>
      
     
    </>
  )
}

export default App
