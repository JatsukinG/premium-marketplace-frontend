import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../modules/auth/hooks/useAuth.js"

const ProtectedRoutes = () => {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated)
    return <Navigate to={{
      pathname: '/auth/login',
      search: `?from=${location.pathname}`,
    }}/>

  return <Outlet/>

}

export default ProtectedRoutes