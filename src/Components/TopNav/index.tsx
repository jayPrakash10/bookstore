import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import DarkLogo from "../../Image/Logo/BS-logo-dark.png";
import LightLogo from "../../Image/Logo/BS-logo-light.png";
import { BsHouseDoorFill, BsInfoSquareFill, BsSearch } from 'react-icons/bs';

const TopNav = () => {
    const [theme, setTheme] = useState('dark');
    const [logo, setLogo] = useState(LightLogo);

    useEffect(() => {
        
        if(theme === 'dark') {
            setLogo(LightLogo);
        } else {
            setLogo(DarkLogo);
        }

    }, [theme]);

    return (
        <Navbar
            collapseOnSelect
            bg={theme}
            variant={theme}
            fixed='top'
            expand="md"
        >
            <Container>
                <Navbar.Brand
                    className='align-items-center text-decoration-underline link-offset-2 user-select-none'
                    href='/'
                >
                    <img className="me-1" src={logo} height="21" alt='bs-logo'/>
                    BookStore
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='shadow-none' />
                <Navbar.Offcanvas className="bg-dark text-light" id="responsive-navbar-nav" aria-labelledby="responsive-navbar-nav" placement="end">
                    <Offcanvas.Header closeButton className='justify-content-end' closeVariant="white"></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className='d-flex align-items-center'>
                                <BsHouseDoorFill className='me-1'/> Home
                            </Nav.Link>
                            <Nav.Link href="/about" className='d-flex align-items-center'>
                                <BsInfoSquareFill className='me-1'/> About
                            </Nav.Link>
                            <Nav.Link href="/search" className='d-flex align-items-center'>
                                <BsSearch className='me-1'/> Search
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default TopNav;