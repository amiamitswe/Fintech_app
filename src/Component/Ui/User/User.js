
import UserImg from '../../../assets/profile.svg'
import { useHistory } from 'react-router'
import './User.css'

const User = () => {
  const history = useHistory()
  return (
    <div className="UserIcon" onClick={() => history.push('/')}>
      <img src={UserImg} className='img-fluid' alt="User" />
    </div>
  )
}

export default User