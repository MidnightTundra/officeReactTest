import {Container, Nav, Navbar as BSNav} from "react-bootstrap"
import {NavLink} from "react-router-dom"


export function NavBar() {
    return (
        <BSNav className = "bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/cart" as={NavLink}>Cart</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                </Nav>
            </Container>
        </BSNav>
    )
}