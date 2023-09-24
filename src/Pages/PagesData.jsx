import CreateProduct from "./Main/CreateProduct.jsx";
import Dashboard from "./Main/Dashboard.jsx"
import Product from "./Main/Product.jsx";
import Products from "./Main/Products.jsx";

const pagesData = [
  {
    path: "/",
    element: <Dashboard />,
    title: "dashboard"
  },
  {
    path: "/product/:product",
    element: <Product />,
    title: "dashboard"
  },
  {
    path: "/products",
    element: <Products />,
    title: "products"
  },
  {
    path: "/create-product",
    element: <CreateProduct />,
    title: "dashboard"
  },
]

export default pagesData;