import { useState } from 'react'
import './App.css'
import Com1 from './components/com1'
import MUISample from './components/MUISample'
import TWCSample from './components/TWCSample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Com1 />
      <MUISample />
      <TWCSample />
    </>
  )
}

export default App
