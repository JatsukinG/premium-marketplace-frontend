import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Toaster } from "react-hot-toast"
import { RecoilRoot } from "recoil"
import { RouterProvider } from "react-router-dom"
import router from "./router/index.jsx"

function App() {

  return (
      <RecoilRoot>
        <RouterProvider router={router}/>
        <Toaster/>
      </RecoilRoot>
  )
}

export default App