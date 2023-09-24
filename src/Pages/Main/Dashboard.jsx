import { useQuery } from "@apollo/client";
import DashboardLoading from "../../components/Loadings/DashboardLoading.jsx"
import ProductsSlider from "../../components/Sliders/ProductsSlider.jsx"
import { useEffect, useState } from "react";
import GET_DASHBOARD_PRODUCTS from "../../queries/getDashboardProducts.js";

const Dashboard = () => {
  const [motorcycleProducts, setMotorcycleProducts] = useState([])
  const [carProducts, setCarProducts] = useState([])

  const { loading, error, data } = useQuery(GET_DASHBOARD_PRODUCTS);

  useEffect(() => {
    if (data) {
      setMotorcycleProducts(data.motorcycleProducts.data)
      setCarProducts(data.carProducts.data)
    }
  }, [data])


  if (error) return `Error! ${error.message}`;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full px-8 py-24 bg-gray-200">
        <h1 className="font-bold text-center text-4xl md:text-6xl">
          Tu Marketplace <br /><span className="text-violet-600">Premium</span>
        </h1>
        <p className="text-center text-sm md:text-xl text-gray-800 mt-8">
          Todo lo necesario para tu vehiculo en un solo sitio, con todas las opciones de pago a los mejores precios
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 p-8">
        <p className="w-full font-bold">
          Respuestos de Automoviles
        </p>
        {
          loading ? (
            <DashboardLoading />
          ) : (
            <ProductsSlider slides={carProducts} />
          )
        }
        <p className="w-full font-bold">
          Respuestos de motos
        </p>
        {
          loading ? (
            <DashboardLoading />
          ) : (
            <ProductsSlider slides={motorcycleProducts} />
          )
        }
      </div>
    </div>
  )
}

export default Dashboard