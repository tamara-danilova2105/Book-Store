import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import booksFone from './assets/booksFone.jpg'
import HomePage from './pages/HomePage';
import Books from './pages/Books';
import Favourites from './pages/Favourites';
import Readme from './pages/Readme';


function App() {
  return (
    <Router>

      <img className='fone' src={booksFone} alt='фон'/>

      <Navbar expand="lg">
        <Container>
          <NavbarBrand><Link to='/' className='header'>Книжная лавка</Link></NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav"/>
          <NavbarCollapse id="basic-navbar-nav">
            <Nav>
              <Link to='/books' className='link' aria-current="page">книги</Link>
              <Link to='/favourites' className='link' aria-current="page">избранное</Link>
              <Link to='/readme' className='link' aria-current="page">readme</Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={ <HomePage/> }></Route>
        <Route path='/books' element={ <Books/> }></Route>
        <Route path='/favourites' element={ <Favourites/> }></Route>
        <Route path='/readme' element={ <Readme/> }></Route>
      </Routes>
    </Router>
  )
}

export default App;


