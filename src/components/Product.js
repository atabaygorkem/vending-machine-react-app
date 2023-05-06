import { Grid } from "@mui/material"
import { useDispatch } from "react-redux"
import useButtonStatus from "../hooks/useButtonStatus"
import { increaseTemperature } from "../state/reducers/machineTemperatureReducer"
import { selectProduct } from "../state/reducers/productsReducer"
import { addFiveMin } from "../state/reducers/timeReducer"

const selected = {
  // color: "green",
  // fontStyle: "italic",
  // fontSize: 16,
  // margin: 40,
  // padding: 10,
  // borderStyle: "solid",
  // borderRadius: 30,
  // borderColor: "gray",
  // // display: "flex",
  borderColor: "black",
  background: "gray",
}

const Product = ({
  productName,
  productPrice,
  productQuantity,
  isSelected,
}) => {
  const isDisabled = useButtonStatus()
  const dispatch = useDispatch()

  const onClick = () => {
    if (isDisabled) return
    dispatch(selectProduct(productName))
    dispatch(addFiveMin())
    dispatch(increaseTemperature())
  }

  return (
    <div
      className="product"
      style={isSelected ? selected : { borderStyle: "solid" }}
      onClick={onClick}
    >
      <p className="p">{productName}</p>
      <p className="p">{productPrice} $</p>
      <p className="p">{productQuantity} left</p>
    </div>
  )
}

export default Product
