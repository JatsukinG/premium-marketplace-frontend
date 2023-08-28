import Router from "./Pages/Router.jsx"
import { AuthContext } from "./context/AuthContext"
import { useState } from "react"

function App() {
  const [user, setUser] = useState(null)

  return (
      <AuthContext.Provider value={{ user, setUser }}>
        <Router/>
      </AuthContext.Provider>
  )
}

export default App