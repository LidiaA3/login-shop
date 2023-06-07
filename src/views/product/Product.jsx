import { useContext } from "react";
import { useParams } from "react-router-dom"
import { loginShopContext } from "../../Layout";
import Button from "../../components/button/Button";
import './Product.scss';

function Product() {

  const { productId } = useParams();
  const allProducts = useContext(loginShopContext).allProducts;
  const thisProduct = allProducts.find((item) => item.id == productId);

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
            <Button text='Add to cart' />
          </div>
        </div>
      </div>
    )
  }
  
  export default Product