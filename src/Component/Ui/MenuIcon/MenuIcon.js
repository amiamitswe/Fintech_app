import './MenuIcon.css'
import { useHistory } from 'react-router'

function MenuIcon() {
  const history = useHistory()
  return (
    <div className="menuIcon" onClick={() => history.push('/')}>
      <h1 className='BrandTitle'>Fintech App</h1>
    </div>
  )
}

export default MenuIcon