import {Navigate} from "react-router-dom";
import { useUser } from "../hooks/useUser.js"

export default function Redirect() {
  const {user} = useUser()

  return <Navigate to={user ? "/dashboard" : "/"} />
}