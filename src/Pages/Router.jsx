import { BrowserRouter, Route, Routes } from "react-router-dom"
import PagesData from "./PagesData"
import Auth from "./Auth/index.jsx"
import MainLayout from "../Layouts/MainLayout.jsx"
import Redirect from "./Redirect"
import { useAuth } from "../hooks/useAuth.js"

const Router = () => {
  const { user } = useAuth()

  return (
      <BrowserRouter>
        <Routes>
          {
            user ? (
                PagesData.filter(row => !row.auth).map(row => (
                    <Route key={row.title} path={`${row.path}`} element={<MainLayout>{row.element}</MainLayout>}/>
                ))
            ) : (
                <Route path="/" element={<Auth/>}/>
            )
          }
          <Route path="*" element={<Redirect/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default Router