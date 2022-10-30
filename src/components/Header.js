
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import trolleyImg from '../assets/images/trolley.svg';
import SearchBar from './searchBar/SearchBar';
import { Categories } from './categories/Categories';


export const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className='navbar-dark bg-dark navbar'>
      <Container>
        <NavLink className='clothingParis text-white' to="/home">Clothing Paris</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="ms-0 nav d-flex align-items-center">
            <NavLink className='menu-link text-light align-self-center' to='/home'>Home</NavLink>

            <NavLink className='menu-link text-light' to='/favorites'>Favorites!^^</NavLink>
            <Categories></Categories>
            <NavLink to='/trolley' className="ms-lg-2"><img className='svg' src={trolleyImg} alt='trolley'></img></NavLink>


          </Nav>

          {/* <Form className="d-flex me-0"> */}
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
