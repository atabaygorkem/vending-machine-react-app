import { useSelector } from "react-redux"

const CustomerBalance = () => {
  const { customerBalance } = useSelector((state) => state)
  return (
    <div>
      <p>Balance: {customerBalance.balance}$</p>
    </div>
  )
}

export default CustomerBalance
