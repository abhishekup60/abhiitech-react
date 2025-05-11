import {Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 nav-bar-wrapper"
                    // style={{ maxHeight: '100px' }}
                    // navbarScroll                
                    >
                    <Link to="./">Home</Link>
                    <Link to="/add">Add Product</Link>
                    <Link to="/update">Update Product</Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item to="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item to="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown> */}
                    <Link to="/register">
                    Register
                    </Link>
                    <Link to="/login">
                    Login
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;
// This is a simple header component in React. It includes a title and a navigation menu with links to different sections of the website.