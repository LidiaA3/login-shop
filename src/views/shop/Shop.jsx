import './Shop.scss'
import { useContext } from "react"
import { productContext } from "../../App";
import Card from "../../components/card/Card";

function Shop() {

    const allProducts = useContext(productContext).allProducts;

    return (
      <>
        <h2>This is my shop</h2>
        <main className='shop'>
          {allProducts.map((item) => {
            return <Card key={item.id} img={item.image} title={item.title} price={item.price} productId={item.id} />;
          })}
        </main>

      </>
    )
  }
  
  export default Shop