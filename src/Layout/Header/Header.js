import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '../../Component/Ui/MenuIcon/MenuIcon';
import User from '../../Component/Ui/User/User';
import classes from './Header.module.css';


const Header = () => {
  return (

    <Navbar fixed="top" bsPrefix={classes.Header}>
      <Container>
        <Row>
          <Col>
            <div className={classes.HeaderWrapper}>
              <div className={classes.HeaderLeft}>
                <MenuIcon />

                <NavLink exact className={classes.MenuLink + ' ml-4'} activeClassName={classes.ActiveMenuLink} to='/'>Wallet</NavLink>
                <NavLink className={classes.MenuLink + ' ml-4'} activeClassName={classes.ActiveMenuLink} to='/a'>History</NavLink>
                <NavLink className={classes.MenuLink + ' ml-4'} activeClassName={classes.ActiveMenuLink} to='/v'>Recipients</NavLink>
                <NavLink className={classes.MenuLink + ' ml-4'} activeClassName={classes.ActiveMenuLink} to='/b'>QR Codes</NavLink>
              </div>
              <div className='d-flex align-items-center justify-content-center'>
                <Link className='mr-3' to='/n'> <FontAwesomeIcon className='text-white' icon={faBell} />  </Link>
                <User />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>

  )
}

export default Header