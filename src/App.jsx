import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Decorations from './pages/Decorations'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Container>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/dekoracije' element={<Decorations />} />
          <Route path='/kontakt' element={<Contact />} />

        </Routes>
      </Container>

      <Footer />
    </>
  )
}

export default App
