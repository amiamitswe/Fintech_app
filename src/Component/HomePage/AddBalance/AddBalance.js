import classes from './AddBalance.module.css'

const AddBalance = ({ onClick }) => (
  <button onClick={onClick} className={classes.AddBalance}>
    Add Balance
  </button>
)

export default AddBalance
