import { useState } from 'react'
import './App.css'
import Profile from './components/profile'
import AboutMe from './components/about'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        < Profile />
        < AboutMe />
    </>
  )
}

export default App
