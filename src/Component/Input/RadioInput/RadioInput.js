
import classes from './RadioInput.module.css'

const RadioInput = ({ value, name, label, changed }) => (
  <>
    <label className={classes.container}>{label}
      <input type="radio" onChange={changed} value={value} name={name} />
      <span className={classes.checkMark}></span>
    </label>
  </>
)

export default RadioInput
