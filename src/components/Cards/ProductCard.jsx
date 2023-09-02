const ProductCard = ({ name, price, off }) => {
  return (
    <div className="w-100% min-w-[200px] h-72 bg-white rounded-md shadow-md overflow-hidden hover:cursor-pointer hover:scale-105 duration-300">
      {/* Imagen */}
      <div className="w-full h-1/2 bg-red-200">
        <img src="https://cdn.pixabay.com/photo/2014/09/13/21/48/drill-444510_1280.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-1/2 flex flex-col p-4 text-gray-900">
        <p className="h-1/3 text-xs">{name}</p>
        <div className="w-full flex items-center gap-2">
          <p className="text-md font-bold">$ {price}</p>
          {
            off ? (
              <p className="text-xs font-bold text-green-600">{off}% off</p>
            ) : null
          }
        </div>
        <p className="py-2 text-green-600 font-bold text-xs">Envio gratis</p>
      </div>
    </div>
  )
}

export default ProductCard