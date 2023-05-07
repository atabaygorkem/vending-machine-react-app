import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import Product from "./Product"

/**
 * Render all products in the state
 * @returns {React.ReactElement}
 */

const ProductList = () => {
  const productsArr = useSelector(({ products }) => products)
  return (
    <div>
      <Grid item container justifyContent="space-evenly">
        {productsArr.map((productObj) => {
          //Extract productId from product objects in the state to destructure props into the Product component
          const { productId, ...productProps } = productObj

          return <Product key={productId} {...productProps} />
        })}
      </Grid>
    </div>
  )
}

export default ProductList
