import { Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";


export const loginShopContext = React.createContext(
  { allProducts: [] },
  { userIsLogin: false, setUserIsLogin: () => {} }
  );

function Layout() {

  const [products, setProducts] = useState([]);
  const [userIsLogin, setUserIsLogin] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <loginShopContext.Provider value={{
      allProducts: products,
      userIsLogin: userIsLogin,
      setUserIsLogin: setUserIsLogin,

    }}>

      <Topbar userLogin={userIsLogin} />

      <main>
        <Outlet />

        <div>
          <Link to='/'>Shop</Link>
          <Link to='/product'>Product</Link>
          <Link to='/user'>User</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/login'>Login</Link>
        </div>
      </main>

      <Footer />
    </loginShopContext.Provider>
  )
}

export default Layout
