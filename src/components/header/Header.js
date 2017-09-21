import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './Header.css'

const Header = (props) => {

    return (
        <header className="Header">
            <NavbarBrand className="Header__title" href="/">Bookstore</NavbarBrand>
            <Nav className="Header__links">
                <NavItem>
                    <NavLink><i className="Header__links__icon material-icons">shopping_cart</i></NavLink>
                </NavItem>
            </Nav>
        </header>
    )

};
export default Header;