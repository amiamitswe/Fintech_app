import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './ActionCart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ActionCart = (props) => {
  return (
    <NavLink className={classes.ActionCart} activeClassName={classes.Active} to={props.link} exact>
      <div className='text-center'>
        <FontAwesomeIcon icon={props.icon} />
        <p className={classes.Title}>{props.name}</p>
      </div>
    </NavLink>
  )
}

export default ActionCart
