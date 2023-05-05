import { useSelector } from "react-redux"
import Product from "./Product"

const ProductList = () => {
  const productsArr = useSelector(({ products }) => products)
  return (
    <div>
      <div>
        {productsArr.map((productObj) => {
          const { productId, ...productProps } = productObj

          return <Product key={productId} {...productProps} />
        })}
      </div>
    </div>
  )
}

export default ProductList
