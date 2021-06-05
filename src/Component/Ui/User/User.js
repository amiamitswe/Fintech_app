import { useHistory } from 'react-router'
import { ReactComponent as UserImg } from '../../../assets/profile.svg'
import classes from './User.module.css'

const User = () => {
  const history = useHistory()
  const onClickUser = () => history.push('/')

  return (
    <div className={classes.UserIcon} onClick={onClickUser}>
      <UserImg src={UserImg} className='img-fluid' alt="User" />
    </div>
  )
}

export default User