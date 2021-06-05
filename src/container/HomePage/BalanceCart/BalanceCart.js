import { Image } from 'react-bootstrap'
import QR from '../../../assets/QR.png'
import classes from './BalanceCart.module.css'

const BalanceCart = ({ type, amount, isPrimary }) => {
  return (
    <div className={classes.BalanceCart}>
      <p className={classes.Title}>{type}</p>
      <div className={classes.AvailBaleTag}>
        {isPrimary && <p className={classes.Available}>Primary</p>}
      </div>
      <p className={classes.AvailBaleText}>Available balance</p>
      <p className={classes.Amount}>$ {amount}</p>
      <div className={classes.QRCode}>
        <Image src={QR} alt="QR" fluid />
      </div>
    </div>
  )
}

export default BalanceCart
