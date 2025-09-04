import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const first = 20;

  useEffect(() => {
    console.log(count);
  }, [])
return()


}

export default App
