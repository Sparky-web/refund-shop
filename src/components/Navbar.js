import React, {useState} from "react";
import {Navbar, NavbarBrand, Nav, NavLink, Collapse, NavbarToggler, NavItem} from "reactstrap"


export default () => {
    const [isToggled, setIsToggled] = useState(false);
    const toggleNavbar = () => {
        setIsToggled(!isToggled)
    };

    return (
        <header>
            <div className="container">
                <Navbar expand="md">
                    <NavbarBrand href="/" className="navbar-logo no-collapse-logo">REFUND SHOP</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar}>
                        <img src="https://img.icons8.com/android/24/000000/menu.png" alt=""/>
                    </NavbarToggler>

                    <Collapse isOpen={isToggled} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#pages">Aliexpress</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#pages">Аккаунты</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#support">Поддержка</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    )
}