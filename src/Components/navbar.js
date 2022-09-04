import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {

    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand data-tip data-for="homeTip" href="/"> 
                <img src="./bank_logo.png" height="32px" alt="Bank Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" className="ms-auto" defaultActiveKey="/" >
                        <Nav.Link data-tip data-for="createAccTip" className="nav-link" to="/createAccount" as={Link} href="/createAccount" > Create Account</Nav.Link>
                        <Nav.Link data-tip data-for="existAccTip"  className="nav-link" to="/login" as={Link} href="/login" > Login</Nav.Link>
                        <Nav.Link data-tip data-for="depositTip" className="nav-link" to="/deposit" as={Link} href="/deposit"> Deposit</Nav.Link>
                        <Nav.Link data-tip data-for="withdrawTip" className="nav-link" to="/withdraw" as={Link} href="/withdraw" > Withdraw</Nav.Link>
                        <Nav.Link data-tip data-for="allDataTip" className="nav-link" to="/allData" as={Link} href="/allData" > All Transactions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
