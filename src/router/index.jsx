import { createBrowserRouter, Outlet } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import Product from '../pages/Main/Product.jsx'
import Login from '../pages/auth/Login.jsx'
import Products from '../pages/Main/Products.jsx'
import SignUp from '../pages/auth/SignUp.jsx'
import MainLayout from "../Layouts/MainLayout.jsx"
import AuthLayout from '../Layouts/auth/index.jsx'
import Dashboard from '../pages/Main/Dashboard.jsx'
import CreateProduct from '../pages/Main/CreateProduct.jsx'
import ForgotPassword from '../pages/auth/ForgotPassword.jsx'
import AuthProvider from '../modules/auth/contexts/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <AuthProvider>
          <MainLayout>
            <Outlet/>
          </MainLayout>
        </AuthProvider>
    ),
    children: [
      {
        path: '',
        element: <Outlet/>,
        children: [
          {
            path: '',
            element: <Dashboard/>,
            index: true,
          },
          {
            path: '/product/:product',
            element: <Product/>,
          },
          {
            path: '/products',
            element: <Products/>,
          },
        ]
      },

      {
        path: '',
        element: <ProtectedRoutes/>,
        children: [
          {
            path: '/create-product',
            element: <CreateProduct/>,
          },
        ]
      },
    ]
  },
  {
    path: '/auth',
    element: (
        <AuthProvider>
          <AuthLayout>
            <Outlet/>
          </AuthLayout>
        </AuthProvider>
    ),
    children: [
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'signup',
        element: <SignUp/>,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword/>,
      },
    ],
  },
])

export default router