import './Cart.scss';
import '../../components/card/Card-grid.scss';
import { useContext, useEffect, useState } from "react"
import { loginShopContext } from "../../Layout"
import Card from "../../components/card/Card";
import Button from '../../components/button/Button';

function Cart() {

  const userIsLogin = useContext(loginShopContext).userIsLogin;
  const allProducts = useContext(loginShopContext).allProducts;
  const productsAtCart = useContext(loginShopContext).productsAtCart;
  const setProductsAtCart = useContext(loginShopContext).setProductsAtCart;

  function handleAddProduct (id) {
    console.log(`Add product width id ${id} to cart`);
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

  function handleDeleteProduct(id) {
    const productToDelete = productsAtCart.find(item => item.productId == id);
    const IndexProductToDelete = productsAtCart.findIndex(item => item.productId == id);
    if(productToDelete.amount > 1) {
      productToDelete.amount -= 1;
      setProductsAtCart([...productsAtCart]);
    } else {
      productsAtCart.splice(IndexProductToDelete, 1);
      setProductsAtCart([...productsAtCart]);
    }
  }

  if (!userIsLogin) {
    return <div className='cart__false'>
      <p className='h3'>Mmm you are not log in</p>
      <Button additionalClasses='cart__false__actions' isLink={true} goTo='/login' text='Log in' />
    </div>
  }

  if(!productsAtCart.length) {
    return <div className="cart__false">
      <p className='h3'>You haven't add any product to the cart</p>
      <Button additionalClasses='cart__false__actions' isLink={true} goTo='/' text='Start shopping' />
    </div>
  }

  const [purchaseSummary, setPurchaseSummary] = useState(0);
  let arrayPurchase = [];

  useEffect(() => {
    setPurchaseSummary(arrayPurchase.reduce((acc, cur) => acc + cur, 0).toFixed(2));
  }, [arrayPurchase])

  return (
    <>
      <article className="grid">
        {productsAtCart.map(item => {
          const product = allProducts.find(prod => prod.id == item.productId);
          arrayPurchase.push(product.price * item.amount);
          return <Card key={item.productId} title={product.title} img={product.image} price={product.price} productId={product.id} showExtraButtons={true} showAmount={true} amount={item.amount} handleAddProduct={handleAddProduct} handleDeleteProduct={handleDeleteProduct} />
        })}
      </article>

      <hr />

      <article className='cart__summary'>
        <p className="h3">Purchase summary</p>
        <p className="h3">{purchaseSummary}€</p>
      </article>
    </>
  )
}
  
  export default Cart