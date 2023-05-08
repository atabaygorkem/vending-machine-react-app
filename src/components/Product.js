import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material"
import { useDispatch } from "react-redux"
import useButtonStatus from "../hooks/useButtonStatus"
import { increaseTemperature } from "../state/reducers/machineTemperatureReducer"
import { selectProduct } from "../state/reducers/productsReducer"
import { addFiveMin } from "../state/reducers/timeReducer"
import PropTypes from "prop-types"

/**
 * Render a single product
 * @component
 * @param {string} productName
 * @param {number} productPrice
 * @param {number} productQuantity
 * @param {boolean} isSelected - Products state indicates the product is chosen or not
 * @returns {React.ReactElement} - Material ui core Card component
 */

const Product = ({
  productName,
  productPrice,
  productQuantity,
  isSelected,
}) => {
  /* Get buttons status from machineTemperature state */
  const isDisabled = useButtonStatus()
  const dispatch = useDispatch()

  const onClick = () => {
    if (isDisabled) return
    dispatch(selectProduct(productName))
    dispatch(addFiveMin())
    dispatch(increaseTemperature())
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="product"
      style={
        isSelected
          ? { backgroundColor: "gray" }
          : { backgroundColor: "#C9CDD8" }
      }
      onClick={onClick}
    >
      <CardActionArea>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardMedia
            sx={{ height: 150, width: 250 }}
            image={`/static/images/${productName.toLowerCase()}.jpg`}
            title={productName}
          />
        </div>
        <CardContent>
          <Grid container direction="column" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productPrice} $
            </Typography>
            <Typography variant="body3" color="text.secondary" marginTop={1}>
              {productQuantity} left
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productQuantity: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default Product
