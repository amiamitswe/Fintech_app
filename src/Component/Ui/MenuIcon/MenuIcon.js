import classes from './MenuIcon.module.css'
import { useHistory } from 'react-router'

function MenuIcon() {
  const history = useHistory()
  const onClickMenu = () => history.push('/')
  return (
    <div className={classes.menuIcon} onClick={onClickMenu}>
      <h1 className={classes.BrandTitle}>Fintech App</h1>
    </div>
  )
}

export default MenuIcon