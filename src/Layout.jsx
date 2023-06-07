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
    let amount = [];
    productsAtCart.map(item => amount.push(item.amount))
    setNumberAtCart(amount.reduce((acc, cur) => acc + cur, 0));
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
      </main>

      <Footer />
    </loginShopContext.Provider>
  )
}

export default Layout
