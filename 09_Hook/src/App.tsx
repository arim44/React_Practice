import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './component/useReducer';
import Login from './component/useReducer2';
import DarkOrLight from './component/Context_Provider';
import Test from './component/customHook_test'
import UseFetchTest from './component/useFetch_test'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Counter />
      <Login />
      <DarkOrLight />
      <Test />
      <UseFetchTest />
    </div>
  )
}

export default App
