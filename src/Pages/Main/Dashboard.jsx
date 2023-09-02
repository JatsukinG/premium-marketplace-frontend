import ProductsSlider from "../../components/Sliders/ProductsSlider.jsx"

const products = [
  {
    name: 'Filtro de gasolina para mazda 3 modelo 2019',
    price: 9000,
    off: 0,
    freeSend: true
  },
  {
    name: 'Filtro',
    price: 9000,
    off: 20,
    freeSend: false
  },
  {
    name: 'Filtro de gasolina para mazda 3 modelo 2019',
    price: 9000,
    off: 0,
    freeSend: false
  },
  {
    name: 'Filtro',
    price: 9000,
    off: 0,
    freeSend: true
  },
  {
    name: 'Filtro de gasolina para mazda 3 modelo 2019',
    price: 9000,
    off: 10,
    freeSend: true
  },
  {
    name: 'Filtro',
    price: 9000,
    off: 10,
    freeSend: false
  },
  {
    name: 'Filtro de gasolina para mazda 3 modelo 2019',
    price: 9000,
    off: 10,
    freeSend: true
  },
  {
    name: 'Filtro',
    price: 9000,
    off: 0,
    freeSend: false
  },
  {
    name: 'Filtro de gasolina para mazda 3 modelo 2019',
    price: 9000,
    off: 0,
    freeSend: true
  },
]


const Dashboard = () => {
  return (
      <div className="w-full h-full flex flex-col p-4 gap-4">
        <div className="w-full h-12 bg-white rounded-md shadow-xl"></div>
        <div className="w-full flex flex-col gap-4">
          <p className="w-full font-bold">
            Respuestos de Automoviles
          </p>
          <ProductsSlider slides={products}/>
          <p className="w-full font-bold">
            Respuestos de motos
          </p>
          <ProductsSlider slides={products}/>
        </div>
      </div>
  )
}

export default Dashboard