import React from 'react'
import classes from './CheckBox.module.css'

const CheckBox = (props) => {
  return (
    <>
      {props.label ? <label className="form-check-label" htmlFor={props.labelfor}>{props.label}</label> : ""}
      {props.options.map(el =>
        <div key={el.value}>
          <label className={classes.container} >{el.displayValue}
            <input checked={props.checked} name={props.name} type="checkbox" onChange={(e) => props.changed(e, el.value)} />
            <span className={classes.checkMark}></span>
          </label>
        </div>
      )}
    </>
  )
}

export default CheckBox
