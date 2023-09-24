import { useQuery } from '@apollo/client';
import GET_PRODUCTS from '../../queries/getProducts';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/Cards/ProductCard';
import ProductsLoading from '../../components/Loadings/ProductsLoading';

const Products = () => {
    const [products, setProducts] = useState([])

    const { loading, error, data } = useQuery(GET_PRODUCTS);

    useEffect(() => {
        if (data) {
            console.log(data);
            setProducts(data.products.data)
        }
    }, [data])

    if (error) return `Error! ${error.message}`;

    if(loading) return <ProductsLoading />

    return (
        <div className='w-full p-4 flex flex-col max-h-full overflow-y-scroll'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4'>
                {
                    products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products