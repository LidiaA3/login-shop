import { Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";


export const productContext = React.createContext(
  { allProducts: [] },
  { userIsLogin: false, setUserIsLogin: () => {} }
  );

function Layout() {

  const [products, setProducts] = useState([]);
  const [userIsLogin, setUserIsLogin] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <productContext.Provider value={{
      allProducts: products,
      userIsLogin: userIsLogin,
      setUserIsLogin: setUserIsLogin,
    }}>

      <Topbar userLogin={userIsLogin} />

      <Outlet />

      <Link to='/'>Shop</Link>
      <Link to='/product'>Product</Link>
      <Link to='/user'>User</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/login'>Login</Link>

      <Footer />
    </productContext.Provider>
  )
}

export default Layout
