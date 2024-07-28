import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Custom.css';
import { Link } from 'react-router-dom';


function NavScrollExample(props) {
  return (
    <Navbar expand="lg" className={`navbar ${props.mod}-blue`} to="/">
      <Container fluid>
        <Navbar.Brand><Link class="nav-item nav-link active" to={"/"}>{props.title}</Link></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <li class="nav-item"  >
              <Link class="nav-link active" to="/">Home</Link>
            </li>
            <li class="nav-item"  >
              <Link class="nav-link active" to="/about">About</Link>
            </li>
            <li class="nav-item" >
              <Link class="nav-link active" to="#action2">Contact</Link>
            </li>
          </Nav>
          <Form.Check // prettier-ignore
            onClick={props.Toggle}
            type="switch"
            id="custom-switch"
            label={`${props.mod==='dark' ? 'light' : 'dark'} mode`}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;