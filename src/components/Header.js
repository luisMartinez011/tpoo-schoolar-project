import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import trolleyImg from '../assets/images/trolley.svg';
import SearchBar from './searchBar/SearchBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className='navbar-dark bg-dark navbar'>
      <Container>
        <NavLink className='clothingParis text-white' to="/home">Clothing Paris</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />.

        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto nav">
            <NavLink className='menu-link text-light' to='/home'>Home</NavLink>

            <NavLink className='menu-link text-light' to='/favorites'>Favorites!^^</NavLink>

            <NavLink to='/trolley'><img className='svg' src={trolleyImg} alt='trolley'></img></NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
