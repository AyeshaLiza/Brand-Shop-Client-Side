import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx'
import AddProduct from './Pages/AddProduct.jsx';
import Cart from './Pages/Cart.jsx';
import Error from './Pages/Error.jsx';
import BrandProducts from './Routes/BrandProducts.jsx';
import ProductDetail from './Routes/ProductDetail.jsx';
// import PrivateRoute from './Routes/PrivateRoute/PrivateRoute.jsx';
import Update from './Routes/Update.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import AuthProvider from './Routes/PrivateRoute/AuthProvider.jsx';
import MyCart from './Pages/MyCart.jsx';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute.jsx';
// import PrivateRoute from './Routes/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/brandproduts/:id',
        element: <BrandProducts></BrandProducts>
      },
      {
        path: '/productdetail/:id',
        element: <PrivateRoute>
          <ProductDetail></ProductDetail>
        </PrivateRoute>
      },
      {
        path: '/addproduct',
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
    ]


  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>

  </React.StrictMode>,
)
