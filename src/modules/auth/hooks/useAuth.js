import { useContext } from 'react'
import AuthContext from "../contexts/AuthContext.js"

export default function useAuth() {
  const value = useContext(AuthContext)
  if (value === null)
    throw new Error('Cannot use useAuth outside AuthProvider')
  return value
}