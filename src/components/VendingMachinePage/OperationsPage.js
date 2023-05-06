import { Grid } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import useButtonStatus from "../../hooks/useButtonStatus"
import useMachineNotification from "../../hooks/useMachineNotification"
import {
  buyProduct,
  refundMoney,
} from "../../state/reducers/customerBalanceReducer"
import { increaseTemperature } from "../../state/reducers/machineTemperatureReducer"
import {
  removeProduct,
  resetSelection,
} from "../../state/reducers/productsReducer"
import { addMoneyToSupplierBalance } from "../../state/reducers/supplierReducer"
import { addFiveMin } from "../../state/reducers/timeReducer"
import MachineButton from "../MachineButton"

const OperationsPage = () => {
  const { customerBalance, products } = useSelector((state) => state)
  const dispatch = useDispatch()
  const sendNotification = useMachineNotification()
  const isDisabled = useButtonStatus()

  const purchaseProduct = () => {
    // console.log(customerBalance)
    dispatch(addFiveMin())
    dispatch(increaseTemperature())

    const selectedProduct = products.find((item) => item.isSelected)
    const haveProduct = selectedProduct?.productQuantity > 0
    const haveBalance = selectedProduct?.productPrice <= customerBalance.balance

    if (selectedProduct) {
      if (haveBalance && haveProduct) {
        dispatch(buyProduct(selectedProduct.productPrice))
        dispatch(addMoneyToSupplierBalance(selectedProduct.productPrice))
        dispatch(removeProduct(selectedProduct.productName))
        dispatch(resetSelection())

        sendNotification(
          `${selectedProduct.productName} has been dispensed. 
          Have a nice day 😄`,
          "success",
          4
        )
      } else if (!haveBalance) {
        sendNotification("You need to insert more money ", "warning", 4)
      } else if (!haveProduct) {
        sendNotification(`${selectedProduct.productName} sold out`, "error", 4)
      }
    } else {
      sendNotification("You must choose a product", "info", 4)
    }
  }

  const cancelOperation = () => {
    dispatch(refundMoney())
    dispatch(addFiveMin())
    dispatch(increaseTemperature())

    sendNotification("Don't forget to take your money", "warning", 4)
  }

  return (
    <>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        // bgcolor="yellow"
      >
        <MachineButton
          onClick={purchaseProduct}
          disabled={isDisabled}
          text="Buy"
          className="operation-button"
        />
        <MachineButton
          onClick={cancelOperation}
          disabled={isDisabled}
          text="Cancel"
          className="operation-button"
        />
      </Grid>
    </>
  )
}

export default OperationsPage
