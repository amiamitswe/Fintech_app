import React from 'react'
import { Image } from 'react-bootstrap'
import QR from '../../../assets/QR.png'
import classes from './BalanceCart.module.css'

const BalanceCart = () => {
  return (
    <div className={classes.BalanceCart}>
      <p className={classes.Title}>Dollar Balance</p>
      <div className={classes.AvailBaleTag}>
        <p className={classes.Available}>Primary</p>
      </div>
      <p className={classes.AvailBaleText}>Available balance</p>
      <p className={classes.Amount}>$ 2780,00</p>
      <div className={classes.QRCode}>
        <Image src={QR} alt="QR" fluid />
      </div>
    </div>
  )
}

export default BalanceCart
