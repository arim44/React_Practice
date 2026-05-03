import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ClassCount from './component/ClassClick'
import LiveInput from './component/useStateEx'
import StateParent from './component/Parent2'
import StateCounter from './component/Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {members.map((member) => 
      <React.Fragment key = member.nick}
      )}
    </div>
      {/* <ClassCount init={1} />
      <LiveInput />
      <StateParent /> */}
    </>
  )
}

export default App
