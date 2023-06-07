import '../../components/card/Card-grid.scss';
import { useContext } from "react"
import { loginShopContext } from "../../Layout";
import Card from "../../components/card/Card";

function Shop() {

  const allProducts = useContext(loginShopContext).allProducts;
  const productsAtCart = useContext(loginShopContext).productsAtCart;
  const setProductsAtCart = useContext(loginShopContext).setProductsAtCart;

  function handleAddProduct (id) {
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
      <h2>This is my shop</h2>
      <article className='grid'>
        {allProducts.map((item) => {
          return <Card key={item.id} img={item.image} title={item.title} price={item.price} productId={item.id} handleAddProduct={handleAddProduct} />;
        })}
      </article>
    </>
  )
}
  
export default Shop