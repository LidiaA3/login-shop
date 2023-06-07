import './Shop.scss'
import { useContext } from "react"
import { loginShopContext } from "../../Layout";
import Card from "../../components/card/Card";

function Shop() {

    const allProducts = useContext(loginShopContext).allProducts;
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

    console.log(productsAtCart)

    return (
      <>
        <h2>This is my shop</h2>
        <main className='shop'>
          {allProducts.map((item) => {
            return <Card key={item.id} img={item.image} title={item.title} price={item.price} productId={item.id} handleAddProduct={handleAddProduct} />;
          })}
        </main>

      </>
    )
  }
  
  export default Shop