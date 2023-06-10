import '../../components/card/Card-grid.scss';
import { useContext, useState } from "react"
import { loginShopContext } from "../../Layout";
import Card from "../../components/card/Card";
import Alert from '../../components/alert/Alert';

function Shop() {

  const allProducts = useContext(loginShopContext).allProducts;
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
      existProduct.amount += 1;
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
    <>
      <article className='grid'>
        {allProducts.map((item) => {
          return <Card key={item.id} img={item.image} title={item.title} price={item.price} productId={item.id} handleAddProduct={handleAddProduct} />;
        })}
      </article>

      <div className="alert">
        {showAlertLogin && <Alert text="You are not login" close={setShowAlertLogin} />}
      </div>
    </>
  )
}
  
export default Shop