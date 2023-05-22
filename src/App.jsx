import { Link, Route, Routes } from "react-router-dom"
import Cart from "./views/cart/Cart"
import Login from "./views/login/Login"
import Product from "./views/product/Product"
import Shop from "./views/shop/Shop"
import User from "./views/user/User"

function App() {

  return (
    <>
      <h1>This is my shop app</h1>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path='/user' element={<User />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Link to='/'>Shop</Link>
      <Link to='/product'>Product</Link>
      <Link to='/user'>User</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/login'>Login</Link>
    </>
  )
}

export default App
