import Router from "./pages/Router.jsx"
import { AuthContext } from "./context/AuthContext"
import { useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Toaster } from "react-hot-toast"

function App() {
  const [user, setUser] = useState(null)
 // test
  return (
      <AuthContext.Provider value={{ user, setUser }}>
        <Router/>
        <Toaster/>
      </AuthContext.Provider>
  )
}

export default App