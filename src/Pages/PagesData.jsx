import Auth from "./Auth/index.jsx";
import Dashboard from "./Main/Dashboard.jsx"

const pagesData = [
  {
    path: "/",
    element: <Auth />,
    title: "auth",
    auth: true
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    title: "dashboard"
  }
]

export default pagesData;