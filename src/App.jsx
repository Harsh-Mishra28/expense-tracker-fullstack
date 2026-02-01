import { useEffect, useState } from 'react'
import MainLayout from './components/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import About from './components/About'



function App() {

  const [firstName, setfirstName] = useState('')

  useEffect(() => {
   const savedName = localStorage.getItem("firstName")
    if(savedName){
      setfirstName(savedName)
    }
  }, [])
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register setFirstName={setfirstName} />} />
        <Route path="/dashboard" element={<MainLayout firstName={firstName} setfirstName={setfirstName} />} />
        <Route path='/ContactMe' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
