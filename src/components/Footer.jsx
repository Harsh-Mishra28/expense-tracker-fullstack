import { useState } from "react"
import ContactMe from "./About"
import { useNavigate } from "react-router-dom"

const Footer = () => {

  const [showContact, setShowContact] = useState(false)

  const navigate = useNavigate()

  function contacthandler(){
    navigate('/ContactMe')
  }

  return (
    <>
      <div className="bg-[#a4a7a4bc] absolute bottom-0 w-full px-5 py-2">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="font-semibold text-xl">
            © Harsh-Mishra || Created by Harsh
          </p>

          <p className="font-semibold text-xl">
            Build using React || Tailwind
          </p>

          <button
            onClick={() => setShowContact(true)}
            className="footer-btn mr-5"
          >
            <div
            onClick={contacthandler}
            className="wrap">
              <p>
                <span>✧</span>
                <span>✦</span>
                Contact Me
              </p>
            </div>
          </button>
        </div>
      </div>

      {showContact ? <ContactMe /> : null}
    </>
  )
}

export default Footer
