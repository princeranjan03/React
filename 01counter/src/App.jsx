import { useState } from 'react'
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {

  const [counter, setCounter]  = useState(0)

  //let counter = 0

  const addValue = () => {
    //counter = counter + 1
    if(counter>=20){

      setCounter(20)
    }
    else
    setCounter(prevCounter => prevCounter + 1)
  
    
  }

  const removeValue = () => {
    if(counter==0){

      setCounter(0)
    }
    else
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App