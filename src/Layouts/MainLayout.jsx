import MainNavbar from "../components/Navbar/MainNavbar.jsx"

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col bg-gray-50 overflow-y-scroll">
      <MainNavbar />
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default MainLayout