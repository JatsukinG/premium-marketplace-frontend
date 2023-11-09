import { useRecoilState, useResetRecoilState } from 'recoil'
import AuthContext from "./AuthContext.js"
import authTokenState from "../atoms/authTokenState.js"

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useRecoilState(authTokenState)
  const resetAuthToken = useResetRecoilState(authTokenState)
  const isAuthenticated = authToken !== undefined
  const login = (tokenAuth) => {
    setAuthToken(() => tokenAuth)
  }

  const logout = () => {
    resetAuthToken()
  }

  return (
      <AuthContext.Provider
          value={{
            authToken,
            isAuthenticated,
            login,
            logout,
          }}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider