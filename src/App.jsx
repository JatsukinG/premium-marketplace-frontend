import Router from "./Pages/Router.jsx"
import { AuthContext } from "./context/AuthContext"
import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    import('preline');
  }, []);

  return (
      <AuthContext.Provider value={{ user, setUser }}>
        <Router/>
        <Toaster />
      </AuthContext.Provider>
  )
}

export default App