import { useEffect, useState } from 'react'
import MainLayout from './components/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'



import { Toaster } from 'react-hot-toast'

function App() {

  const [firstName, setfirstName] = useState('')

  useEffect(() => {
   const savedName = localStorage.getItem("firstName")
    if(savedName){
      setfirstName(savedName)
    }
  }, [])
  
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register setFirstName={setfirstName} />} />
          <Route path="/dashboard" element={<MainLayout firstName={firstName} setfirstName={setfirstName} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
