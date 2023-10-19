import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "Mazhar",
    age:25
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
       <Card userName="Mazhar" btn = "Click me" someObj = {myObj}/>
       <Card userName="Nowsad Alam" btn = "Press me" someObj = {myObj}/>
       <Card userName="Motiara Khatun"  btn = "Follow me" someObj = {myObj}/>
      
    </>
  )
}

export default App
