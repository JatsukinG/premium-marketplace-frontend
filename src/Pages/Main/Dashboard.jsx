import MainTable from "../../components/Tables/MainTable.jsx"
import { FiSearch } from "react-icons/fi"
import { FaListUl } from "react-icons/fa"
import { IoGrid } from "react-icons/io5"
import { BiFilter } from "react-icons/bi"

const Dashboard = () => {
  return (
      <div className="w-full h-full p-2 md:p-4">
        <div className="w-full bg-white shadow-xl rounded-2xl border overflow-hidden">
          {/*Table header options*/}
          <div className="w-full bg-white flex flex-col gap-4 md:flex-row justify-between items-center p-4">
            <div className="relative z-1 w-full md:w-96">
              <input
                  type="text"
                  className="w-full pl-8 py-2 rounded-full border text-sm"
                  placeholder="Buscar un atleta..."/>
              <span className="absolute top-1/2 -translate-y-1/2 left-2">
                <FiSearch size="20px" color="#eeeeee"/>
              </span>
            </div>
            <div className="flex justify-between w-full md:w-min gap-2">
              <div className="flex border rounded-md overflow-hidden">
                <span className="flex px-2 items-center bg-gray-900 text-white"><FaListUl size="14px"/></span>
                <span className="flex px-2 items-center"><IoGrid size="14px"/></span>
              </div>
              <button className="flex items-center gap-2 font-bold text-xs px-4 py-2 bg-white border rounded-md">
                <span><BiFilter size="14px" color="#888888"/></span>
                <p className="text-gray-600">Filtro</p>
                <p className="text-gray-200">|</p>
                <p className="text-blue-600">1</p>
              </button>
            </div>
          </div>
          {/*End table header option*/}
          {/*<MainTable/>*/}
        </div>
      </div>
  )
}

export default Dashboard