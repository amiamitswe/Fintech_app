import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '../../Component/Ui/MenuIcon/MenuIcon';
import User from '../../Component/Ui/User/User';
import classes from './Header.module.css';

const Header = () => (
  <Navbar fixed="top" collapseOnSelect expand="lg" className={classes.Header} variant="dark">
    <Container>
      <MenuIcon />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto">
          <div className={classes.HeaderLeft + ' mt-2 mt-lg-0'}>
            <NavLink exact className={classes.MenuLink + ' ml-0 ml-lg-4'} activeClassName={classes.ActiveMenuLink} to='/'>Wallet</NavLink>
            <NavLink className={classes.MenuLink + ' ml-0 ml-lg-4'} activeClassName={classes.ActiveMenuLink} to='/history'>History</NavLink>
            <NavLink className={classes.MenuLink + ' ml-0 ml-lg-4'} activeClassName={classes.ActiveMenuLink} to='/recipients'>Recipients</NavLink>
            <NavLink className={classes.MenuLink + ' ml-0 ml-lg-4'} activeClassName={classes.ActiveMenuLink} to='/QRCodes'>QR Codes</NavLink>
          </div>
        </Nav>
        <Nav>
          <div className={classes.HeaderRight}>
            <Link className='mx-3' to='/'>
              <FontAwesomeIcon className='text-white' icon={faBell} />
            </Link>
            <User />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header