import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import Product from "./Product"

const ProductList = () => {
  const productsArr = useSelector(({ products }) => products)
  return (
    <div>
      <Grid item container justifyContent="space-evenly">
        {productsArr.map((productObj) => {
          const { productId, ...productProps } = productObj

          return <Product key={productId} {...productProps} />
        })}
      </Grid>
    </div>
  )
}

export default ProductList
