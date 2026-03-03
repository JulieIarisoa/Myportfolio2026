import { useState } from 'react'
import './App.css'
import Profile from './components/profile'
import AboutMe from './components/about'
import Experience from './components/exprerience'
import Projet from './components/projet'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        < Profile />
        < AboutMe />
        < Experience />
        < Projet />
        < Footer />
    </>
  )
}

export default App
