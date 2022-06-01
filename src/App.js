import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Badge, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import { useSelector } from 'react-redux';
import { getMyBook } from './redux/favouritesSlice';

import booksFone from './assets/booksFone.jpg'
import HomePage from './pages/HomePage';
import Books from './pages/Books';
import Favourites from './pages/Favourites';
import Readme from './pages/Readme';
import Reviews from './pages/Reviews';

function App() {

  const booksList = useSelector(getMyBook)
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
              <Link to='/favourites' className='link' aria-current="page">
              избранное <Badge pill bg="success">{booksList.length}</Badge></Link>
              <Link to='/reviews' className='link' aria-current="page">отзывы</Link>
              <Link to='/readme' className='link' aria-current="page">readme</Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={ <HomePage/> }></Route>
        <Route path='/books' element={ <Books/> }></Route>
        <Route path='/favourites' element={ <Favourites/> }></Route>
        <Route path='/reviews' element={ <Reviews /> }></Route>
        <Route path='/readme' element={ <Readme/> }></Route>
      </Routes>
    </Router>
  )
}

export default App;


