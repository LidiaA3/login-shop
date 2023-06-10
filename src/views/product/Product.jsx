import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { loginShopContext } from "../../Layout";
import Button from "../../components/button/Button";
import './Product.scss';
import Alert from "../../components/alert/Alert";

function Product() {

  const { productId } = useParams();
  const allProducts = useContext(loginShopContext).allProducts;
  const thisProduct = allProducts.find((item) => item.id == productId);

  const productsAtCart = useContext(loginShopContext).productsAtCart;
  const setProductsAtCart = useContext(loginShopContext).setProductsAtCart;

  const userIsLogin = useContext(loginShopContext).userIsLogin;
  const [showAlertLogin, setShowAlertLogin] = useState(false);

  function handleAddProduct (id) {
    if(!userIsLogin) {
      setShowAlertLogin(true);
      return;
    }
    
    const existProduct = productsAtCart.find(item => item.productId == id);

    if(existProduct) {
      existProduct.amount =+ 1;
      setProductsAtCart([...productsAtCart])
    } else {
      const newProduct = {
        productId: id,
        amount: 1,
      }
      setProductsAtCart([...productsAtCart, newProduct])
    }
  }

  return (
    <div className="product">
      <div className="product__img">
        <img src={thisProduct.image} alt={thisProduct.title} />
      </div>
      <div className="product__contents">
        <h2>{thisProduct.title}</h2>
        <p>{thisProduct.description}</p>
        <div className="product__actions">
          <p className="p-big">{thisProduct.price}€</p>
          <Button isLink={true} goTo='/' text='Continue shopping' type='secondary' />
          <Button handleClick={() => handleAddProduct(thisProduct.id)} text='Add to cart' />
        </div>
      </div>

      <div className="alert">
        {showAlertLogin && <Alert text="You are not login" close={setShowAlertLogin} />}
      </div>
    </div>
  )
}
  
export default Product