import { useContext } from "react";
import { useParams } from "react-router-dom"
import { loginShopContext } from "../../Layout";
import Button from "../../components/button/Button";
import './Product.scss';

function Product() {

  const { productId } = useParams();
  const allProducts = useContext(loginShopContext).allProducts;
  const thisProduct = allProducts.find((item) => item.id == productId);

  const productsAtCart = useContext(loginShopContext).productsAtCart;
  const setProductsAtCart = useContext(loginShopContext).setProductsAtCart;

  function handleAddProduct (id) {
    console.log(`Add product width id ${id} to cart`);
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
    </div>
  )
}
  
export default Product