import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/global.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './views/shop/Shop.jsx';
import Cart from "./views/cart/Cart"
import Login from "./views/login/Login"
import Product from "./views/product/Product"
import User from "./views/user/User"
import Layout from './Layout.jsx';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
