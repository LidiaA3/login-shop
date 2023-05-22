import { useContext } from "react"

function Shop() {

    const allProducts = useContext(productContext);

    return (
      <>
        <h2>This is my shop</h2>
        {console.log(allProducts)}

      </>
    )
  }
  
  export default Shop