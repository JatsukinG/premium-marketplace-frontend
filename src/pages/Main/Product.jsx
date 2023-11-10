import {BiSolidStar, BiStar} from "react-icons/bi"
import {FaShoppingCart} from "react-icons/fa"
import {BsHandbagFill} from "react-icons/bs"
import {useParams} from "react-router-dom"
import GET_PRODUCT_BY_ID from "../../queries/getProductById"
import {useQuery} from "@apollo/client"
import ProductPageLoading from "../../components/Loadings/ProductPageLoading"
import RichTextRenderer from "../../modules/product/components/RichTextRenderer.jsx";

const Product = () => {
    const {product} = useParams()

    const {loading, error, data} = useQuery(GET_PRODUCT_BY_ID, {
        variables: {
            id: product
        }
    });

    if (loading) return <ProductPageLoading/>
    if (error) return `Error! ${error.message}`;

    if (data) {
        const productInfo = data.product.data.attributes

        return (
            <div className="w-full h-full flex flex-col-reverse md:flex-row md:justify-center gap-2 p-4">
                <div className="flex flex-col gap-2 bg-white border rounded-md shadow-xl">
                    <div className="flex flex-col-reverse md:flex-row gap-2 p-2">
                        {/* images list */}
                        <div className="flex md:flex-col gap-2 md:h-96">
                            {
                                [1, 1, 1, 1, 1].map(n => (
                                    <div key={Math.random()}
                                         className="w-12 h-12 bg-white border rounded-md overflow-hidden">
                                        <img src="https://cdn.pixabay.com/photo/2014/09/13/21/48/drill-444510_1280.jpg"
                                             alt="product-img" className="w-full h-full object-cover"/>
                                    </div>
                                ))
                            }
                        </div>
                        {/* main image */}
                        <div className="md:w-[800px] md:h-[450px] bg-white border rounded-md overflow-hidden">
                            <img src="https://cdn.pixabay.com/photo/2014/09/13/21/48/drill-444510_1280.jpg"
                                 alt="product-img" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="w-full h-96 p-4">
                        <p className="text-gray-700 font-bold text-xl py-8">Descripción</p>
                        <p className="text-gray-700">
                            <RichTextRenderer text={productInfo.description}/>
                        </p>
                        <hr className="mt-8"/>
                        <p className="text-gray-700 font-bold text-xl py-8">Preguntas y respuestas</p>
                        <p className="text-gray-700">Cuanto tiempo de garantia tiene el producto?</p>
                        <hr className="mt-8"/>
                    </div>
                </div>
                {/* product main details */}
                <div className="flex flex-col">
                    <div className="h-min bg-white border rounded-md flex flex-col px-4 py-8">
                        <h3 className="font-bold text-xl text-gray-700">
                            {productInfo.name}
                        </h3>
                        <div className="flex items-center py-4">
                            {
                                [1, 2, 3, 4, 5].map(n => (
                                    n <= 4 ? (
                                        <BiSolidStar key={n} size="18px" color="#ffaa00"/>
                                    ) : (
                                        <BiStar key={n} size="18px" color="#ffaa00"/>
                                    )
                                ))
                            }
                            <p className="text-xs ml-2">(172)</p>
                        </div>
                        <div className="flex items-center gap-2 py-4">
                            <p className="text-3xl font-bold text-gray-700">$ {productInfo.price}</p>
                            {productInfo.offPercent > 0 ?
                                <p className="text-xs font-bold text-green-600">{productInfo.offPercent}% off</p> : ""}
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
                            <button
                                className="w-full px-4 py-2 border rounded-full flex justify-center items-center gap-2 text-xs font-bold">
                                <FaShoppingCart size="14px"/>
                                Agregar al carrito
                            </button>
                            <button
                                className="w-full px-4 py-2 border rounded-full flex justify-center items-center gap-2 text-xs font-bold bg-blue-700 text-white">
                                <BsHandbagFill size="14px"/>
                                Comprar ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product