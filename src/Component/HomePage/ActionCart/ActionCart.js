import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './ActionCart.module.css'

const ActionCart = ({ link, icon, name }) => (
  <NavLink className={classes.ActionCart} activeClassName={classes.Active} to={link} exact>
    <div className='text-center'>
      <FontAwesomeIcon icon={icon} />
      <p className={classes.Title}>{name}</p>
    </div>
  </NavLink>
)

export default ActionCart
