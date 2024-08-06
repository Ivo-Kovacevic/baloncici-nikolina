import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>
    </>
  )
}

export default App
