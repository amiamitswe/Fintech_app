import classes from './AddBalance.module.css'
import React from 'react'

const AddBalance = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.AddBalance}>
      Add Balance
    </button>
  )
}

export default AddBalance
