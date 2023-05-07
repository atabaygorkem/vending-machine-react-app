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
        <CardMedia
          sx={{ height: 150, width: 250 }}
          image={`/static/images/${productName.toLowerCase()}.jpg`}
          title={productName}
        />
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
