import { useContext } from "react";
import { useParams } from "react-router-dom"
import { productContext } from "../../Layout";
import Button from "../../components/button/Button";

function Product() {

  const { productId } = useParams();
  const allProducts = useContext(productContext).allProducts;
  const thisProduct = allProducts.find((item) => item.id == productId);

    return (
      <>
        <img src={thisProduct.image} alt={thisProduct.title} />
        <h2>{thisProduct.title}</h2>
        <p>{thisProduct.description}</p>
        <p>{thisProduct.price}</p>
        <Button text='Add to cart' />
      </>
    )
  }
  
  export default Product