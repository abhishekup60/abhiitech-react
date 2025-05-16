import {Navbar,Nav, Container, NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function Header() {
    const username = JSON.parse(localStorage.getItem('user_name'));
    const navigate = useNavigate();
    
    function logout()
    {
        localStorage.clear();
        navigate("/login");
    }
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Abhi I-Tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {
                        localStorage.getItem('authToken') ?
                        <>
                <Nav className="me-auto my-2 my-lg-0 nav-bar-wrapper"
                    // style={{ maxHeight: '100px' }}
                    // navbarScroll                
                    >
                        <Link to="/product/add">Add Product</Link>
                        <Link to="/product/">Product List</Link>
                </Nav>
                    <nav>
                    <NavDropdown title={"Welcome " + username}>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </nav>
                        </>
                        :
                        <>
                <Nav className="me-auto my-2 my-lg-0 nav-bar-wrapper"
                    // style={{ maxHeight: '100px' }}
                    // navbarScroll                
                    >
                        <Link to="./">Home</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                </Nav>
                        </>
                        
                    }
                
                

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;
