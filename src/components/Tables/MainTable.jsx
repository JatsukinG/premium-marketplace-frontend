import { FiSearch } from "react-icons/fi"
import { BiFilter } from "react-icons/bi"
import { GrFormDown, GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FaListUl } from "react-icons/fa"
import { IoGrid } from "react-icons/io5"
import { useUser } from "../../hooks/useUser.js"
import { useEffect } from "react"

const athletes = [{
  sessionID: '1111', name: 'Julian Andres Trujillo Molinares'
}, {
  sessionID: '1111', name: 'Julian Andres Trujillo'
}, {
  sessionID: '1111', name: 'Julian Andres Trujillo'
}, {
  sessionID: '1111', name: 'Julian Andres Trujillo'
}, {
  sessionID: '1111', name: 'Julian Andres Trujillo'
}]

const MainTable = () => {
  const { user } = useUser()

  useEffect(() => {
    console.log({ user })
  }, [user])

  return (
      <div className="w-full">
        <div className="w-full overflow-hidden overflow-x-scroll">
          <table className="w-full min-w-[1200px]">
            <tr className="text-gray-700 bg-gray-50 uppercase text-xs">
              <th><input type="checkbox"/></th>
              <th></th>
              <th className="p-[10px] text-left">Nombre</th>
              <th className="p-[10px]">Año de<br/>nacimiento</th>
              <th className="p-[10px]">Talla</th>
              <th className="p-[10px]">OVR<br/>general</th>
              <th className="p-[10px]">Potencia</th>
              <th className="p-[10px]">Resistencia</th>
              <th className="p-[10px]">OVR<br/>fisico</th>
              <th className="p-[10px]">OVR<br/>tecnico</th>
              <th className="p-[10px]">OVR de<br/>competencia</th>
              <th className="p-[10px]">Estado</th>
              <th className="p-[10px]">Video</th>
            </tr>
            {athletes.map((row) => (
                <tr key={row.sessionID} className="text-xs text-gray-600 border-b animate-in">
                  <td className="px-4">
                    <input type="checkbox"/>
                  </td>
                  <td className="px-2">
                    <div className="w-8 h-8 bg-black rounded-full border-2 border-green-400"></div>
                  </td>
                  <td className="pr-4">
                    <div className="flex flex-col justify-center py-[12px] text-left">
                      <p className="text-sm font-bold">{row.name}</p>
                      <p>Mediocampista ofensivo</p>
                    </div>
                  </td>
                  <td className="text-center">{2018}</td>
                  <td className="text-center">{1}</td>
                  <td className="text-center">
                    <span className="text-green-900 bg-green-200 px-4 py-1 font-bold rounded-full">{90}</span>
                  </td>
                  <td className="text-center">
                    <span className="text-red-900 bg-red-200 px-4 py-1 font-bold rounded-full">{90}</span>
                  </td>
                  <td className="text-center">
                    <span className="text-yellow-900 bg-yellow-200 px-4 py-1 font-bold rounded-full">{90}</span>
                  </td>
                  <td className="text-center">
                    <span className="text-orange-900 bg-orange-200 px-4 py-1 font-bold rounded-full">{90}</span>
                  </td>
                  <td className="text-center">
                    <span className="text-red-900 bg-red-200 px-4 py-1 font-bold rounded-full">{90}</span>
                  </td>
                  <td className="text-center">
                    <span className="text-green-900 bg-green-200 px-4 py-1 font-bold rounded-full">{90}</span>
                  </td>
                  <td className="text-center">Libre</td>
                  <td className="text-center">{1}</td>
                </tr>))}
          </table>
        </div>
        <div className="w-full bg-white flex justify-between items-center px-4 py-2">
          <p className="text-xs font-bold text-gray-700">120 resultados</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 font-bold text-xs px-2 py-0 bg-white border rounded-md">
              5
              <span><GrFormDown size="20px" color="aaaaaa"/></span>
            </button>
            <span><GrFormPrevious size="20px" color="aaaaaa"/></span>
            <p className="text-xs font-bold text-gray-700">
              1 a 5 de... 120
            </p>
            <span><GrFormNext size="20px" color="aaaaaa"/></span>
          </div>
        </div>
      </div>)
}

export default MainTable