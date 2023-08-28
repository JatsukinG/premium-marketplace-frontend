import MainNavbar from "../components/Navbar/MainNavbar.jsx"

const MainLayout = ({ children }) => {
  return (
      <div className="w-full h-full flex flex-col bg-gray-50 overflow-y-scroll">
        <MainNavbar/>
        {children}
        <div className="w-full text-center py-2">
          @mercatto by prospect 1
        </div>
      </div>
  )
}

export default MainLayout