import { Link } from "react-router-dom"

const ProductCard = ({ id, attributes }) => {

  return (
    <div className="w-100% md:min-w-[200px] h-64 md:h-72 bg-white rounded-md shadow-md overflow-hidden hover:cursor-pointer md:hover:scale-105 duration-300">
      <Link to={`/product/${id}`}>
        {/* Imagen */}
        <div className="w-full h-1/2">
          <img src="https://cdn.pixabay.com/photo/2014/09/13/21/48/drill-444510_1280.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-1/2 flex flex-col p-4 text-gray-900">
          <p className="h-2/3 md:h-1/3 text-[10px] font-bold md:text-xs">{attributes.name.length > 32 ? `${attributes.name.substring(0, 32)}...` : attributes.name}</p>
          <div className="w-full flex items-center gap-2">
            <p className="text-xs md:text-xl font-bold">$ {attributes.price}</p>
            {
              attributes.offPercent ? (
                <p className="text-[8px] md:text-xs font-bold text-green-600">{attributes.offPercent}% off</p>
              ) : null
            }
          </div>
          <p className="py-2 text-green-600 font-bold text-xs">Envio gratis</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard