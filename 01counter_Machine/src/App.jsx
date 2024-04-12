import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const adddigit=()=>{
    count=count+1;
    setCount(count)
  }
  const subtractdigit=()=>{
    count=count-1;
    setCount(count)
  }
  const reset=()=>{
    count=count+1;
    setCount(0)
  }
  return (
    <>
      <div>
      <h1>counter machine </h1>
      <h2>current number {count}</h2>
      <button onClick={adddigit}>Adddigit</button>
      <br />
      <button onClick={subtractdigit}>Decreasedigit</button>
      <br />
      <button onClick={reset}>Resetdigit</button>
      </div>
      
    </>
  )
}

export default App
