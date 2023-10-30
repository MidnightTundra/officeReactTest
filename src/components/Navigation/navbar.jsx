import { Row, Button, Container, Nav, Navbar as BSNav, Navbar, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useState } from "react";



export function NavBar() {

    fetch("../mockDatabase.json").then((rep) => rep.json()).then((data) => {
        console.log(data);
    });

    let loggedIn = true;
    const navAccountStates = [
        <a href="/signup" style={{ width: "3rem", height: "3rem" }} className="rounded-circle" variant="outline-primary">Sign In</a>,
        <Button href="/signup" style={{ width: "3rem", height: "3rem" }} className="rounded-circle" variant="outline-primary">CS</Button>
    ]

    const [count, setCount] = useState();
    const [loginState, setLoginState] = useState(loggedIn ? navAccountStates[1] : navAccountStates[0]);

    /*
    let loggedIn = true;
    if(loggedIn) {
        setLoginState(<Button href="/account" style={{ width: "3rem", height: "3rem" }} className="rounded-circle" variant="outline-primary">CS</Button>)
    }
    */

    return (
        <BSNav className="bg-white shadow-sm mb-3">
            <Container fluid style={{flexDirection : "column"}}>
                <Row xl={"auto"} style={{alignItems : "center", width: "100%"}} className="justify-content-md-between">
                    <Col>
                        <Nav>
                            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/cart" as={NavLink}>Cart</Nav.Link>
                            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                            <Nav.Link to="/account" as={NavLink}>Account</Nav.Link>
                            <Nav.Link to="/product?id=1234567" as={NavLink}>Product</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <Navbar.Brand href="/">React</Navbar.Brand>
                    </Col>

                    <Col>
                        {useState(loginState)}
                        <Button href="/cart" style={{ width: "3rem", height: "3rem" }} className="rounded-circle" variant="outline-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="current-color" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <div id="itemCountCart" className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                style={{ color: "white", transform: "translate(100%,25%)", }}>
                                {count}
                            </div>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </BSNav>
    )
}

export default NavBar;