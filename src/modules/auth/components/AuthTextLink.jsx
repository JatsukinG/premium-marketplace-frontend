import { Link } from "react-router-dom"

const AuthTextLink = ({ to, text }) => {
  return (
      <Link to={to} className="underline hover:text-blue-700">
        {text}
      </Link>
  )
}

export default AuthTextLink