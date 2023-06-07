import { Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";


export const loginShopContext = React.createContext(
  { allProducts: [] },
  { userIsLogin: false, setUserIsLogin: () => {} },
  { productsAtCart: [], setProductsAtCart: () => {} }
  );

function Layout() {

  const [products, setProducts] = useState([]);
  const [userIsLogin, setUserIsLogin] = useState(false);
  const [productsAtCart, setProductsAtCart] = useState([]);
  const [numberAtCart, setNumberAtCart] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    productsAtCart.map(item => {
      setNumberAtCart(numberAtCart + item.amount);
    })
  }, [productsAtCart])

  return (
    <loginShopContext.Provider value={{
      allProducts: products,
      userIsLogin: userIsLogin,
      setUserIsLogin: setUserIsLogin,
      productsAtCart: productsAtCart,
      setProductsAtCart: setProductsAtCart
    }}>

      <Topbar userLogin={userIsLogin} numberAtCart={numberAtCart} />

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
