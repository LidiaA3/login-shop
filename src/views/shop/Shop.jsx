import { useContext } from "react"
import { productContext } from "../../App";

function Shop() {

    const allProducts = useContext(productContext);

    return (
      <>
        <h2>This is my shop</h2>
        <main>
          {console.log(allProducts)}
          {allProducts.map((item) => {
            return <Card img={item.image} title={item.title} price={item.price} />;
          })}
        </main>

      </>
    )
  }
  
  export default Shop