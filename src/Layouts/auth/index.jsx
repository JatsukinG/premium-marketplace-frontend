const AuthLayout = ({ children }) => {
  return (
      <div className="w-full h-full flex">
        <div className="w-full md:w-2/5 bg-white h-full flex flex-col">
          {children}
        </div>
        <div className="w-3/5 hidden md:flex flex-col bg-bg1 bg-cover justify-center font-bold px-8">

        </div>
      </div>
  )
}

export default AuthLayout