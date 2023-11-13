import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';



export function ItemSearchBar({ category }, { search }) {

    const [value, setNewValue] = useState("");
    const handleCategoryChange = (e) => {
        console.log(e);
        setNewValue(e);
        category(e);
        //category(value);
    }

    const handleSearch = (e) => {
        console.log(e)
        setNewValue(e);
        search(e);
        //category(value);
    }




    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Iterates over JSON Object for category titles can creates new NavDropdown Menus */}
                        <NavDropdown onSelect={handleCategoryChange} title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey={"Computer"}>Computer</NavDropdown.Item>
                            <NavDropdown.Item eventKey={"Smart Home"}>
                                Smart Home
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ItemSearchBar;