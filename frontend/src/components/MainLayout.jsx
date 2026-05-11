import Navbar from './Navbar'
import Footer from './Footer'
import ExpenseDashboard from './ExpenseDashboard'
import { useState } from "react"

const MainLayout = ({ firstName }) => {

  const [ShowForm, setShowForm] = useState(false)

  function TaskHandler() {
    setShowForm(prev => !prev)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar firstName={firstName} />
      <ExpenseDashboard
        TaskHandler={TaskHandler}
        ShowForm={ShowForm}
        setShowForm={setShowForm}
      />
      <Footer />
    </div>
  )
}

export default MainLayout
