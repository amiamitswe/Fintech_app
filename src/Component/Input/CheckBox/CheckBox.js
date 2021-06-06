import classes from './CheckBox.module.css'

const CheckBox = (props) => {
  const { label, name, labelFor, options, checked, changed } = props
  return (
    <>
      {label ? <label className="form-check-label" htmlFor={labelFor}>{label}</label> : ""}
      {options.map(el =>
        <div key={el.value}>
          <label className={classes.container} >{el.displayValue}
            <input checked={checked} name={name} type="checkbox" onChange={(e) => changed(e, el.value)} />
            <span className={classes.checkMark}></span>
          </label>
        </div>
      )}
    </>
  )
}

export default CheckBox
