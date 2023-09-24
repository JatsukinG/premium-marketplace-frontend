import { BiLogIn, BiLogOut, BiMenu } from "react-icons/bi"
import { useAuth } from "../hooks/useAuth.js"
import { IoNotifications } from "react-icons/io5"
import { BsHandbagFill } from "react-icons/bs"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

const MainLayout = ({ children }) => {
  const { logout, user } = useAuth()

  return (
    <div className="bg-gray-100">
      <header
        className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 border-b border-gray-700 text-sm py-2.5 sm:py-4">
        <nav className="max-w-[85rem] flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Global">
          <div className="mr-2 md:mr-8 flex">
            <Link to="/">
              <p className="w-max flex-none text-sm md:text-xl font-semibold text-white">Premium Marketplace</p>
            </Link>
          </div>

          <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="hidden mx-auto sm:block">
              <label htmlFor="icon" className="sr-only">Buscar un producto</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
                <input type="text" id="icon" name="icon"
                  className="py-2 px-4 pl-11 pr-20 block w-92 md:w-96 bg-transparent border-gray-700 shadow-sm rounded-md text-sm text-gray-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500"
                  placeholder="Buscar un producto" />
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
              {
                user ? (
                  <>
                    <button type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs">
                      <FaShoppingCart size="14px" />
                    </button>
                    <button type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs">
                      <IoNotifications size="18px" />
                    </button>

                    {/* profile dropdown */}
                    <div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="bottom-right">
                      <button id="hs-dropdown-with-header" type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs">
                        <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description" />
                      </button>

                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] z-10 bg-white shadow-md rounded-lg p-2"
                        aria-labelledby="hs-dropdown-with-header">
                        <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
                          <p className="text-sm text-gray-500">Sesión iniciada como</p>
                          <p className="text-sm font-medium text-gray-800">jatmolina15@gmail.com</p>
                        </div>
                        <div className="mt-2 py-2 first:pt-0 last:pb-0">
                          <Link to="/create-product">
                            <button
                              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-100">
                              <BsHandbagFill size="18px" />
                              Vender
                            </button>
                          </Link>
                          <button
                            className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-100"
                            onClick={() => logout()}>
                            <BiLogOut size="18px" />
                            Cerrar sesión
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <div className="hidden md:flex items-center">
                      <Link to="/create-product">
                        <button
                          className="px-4 py-2 rounded-full flex border items-center gap-2 text-xs font-bold text-white">
                          <BsHandbagFill size="14px" />
                          Vender
                        </button>
                      </Link>
                      <Link to="/auth">
                        <button
                          className="px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold bg-[#ffaa00] text-white">
                          <BiLogIn size="18px" />
                          Iniciar sesión
                        </button>
                      </Link>
                    </div>
                    <div className="hs-dropdown relative inline-flex md:hidden" data-hs-dropdown-placement="bottom-right">
                      <span className="flex text-white">
                        <BiMenu size="24px" />
                      </span>

                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] z-10 bg-white shadow-md rounded-lg p-2"
                        aria-labelledby="hs-dropdown-with-header">
                        <div className="mt-2 py-2 first:pt-0 last:pb-0">
                          <Link to="/create-product">
                            <button
                              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-100">
                              <BsHandbagFill size="18px" />
                              Vender
                            </button>
                          </Link>
                          <Link to="/auth">
                            <button
                              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-100">
                              <BiLogOut size="18px" />
                              Iniciar sessión
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
        </nav>
      </header>

      <main id="content" role="main">
        <div className="w-full">
          {children}
        </div>
      </main>

    </div>
  )
}

export default MainLayout