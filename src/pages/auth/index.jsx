import { useState } from "react"
import Login from "../../components/Auth/Login.jsx"
import SignUp from "../../components/Auth/SignUp.jsx"
import ForgotPassword from "../../components/Auth/ForgotPassword.jsx"

const Auth = () => {
  const [component, setComponent] = useState(1)

  return (
      <div className="w-full h-full flex">
        <div className="w-full md:w-2/5 bg-white h-full flex flex-col">
          {
            component === 1 ? (
                <Login setComponent={(comp) => setComponent(comp)}/>
            ) : component === 2 ? (
                <SignUp setComponent={(comp) => setComponent(comp)}/>
            ) : (
                <ForgotPassword setComponent={(comp) => setComponent(comp)}/>
            )
          }
        </div>
        <div className="w-3/5 hidden md:flex flex-col bg-bg1 bg-cover justify-center font-bold px-8">

        </div>
      </div>
  )
}

export default Auth