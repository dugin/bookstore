import React from 'react';
import {NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './Header.css';
import {Link} from 'react-router-dom';


const Header = (props) => {

    return (
        <div className="Header">
            {props.route && props.route.localeCompare('/') !== 0 && (
                <Link to="/"> <i className="material-icons Header__back-arrow">keyboard_arrow_left</i></Link>
            )}
            <nav className="container Header__block">
                <NavbarBrand className="Header__title" href="/">Bookstore</NavbarBrand>
                <Nav className="Header__links">
                    <NavItem>
                        <NavLink><i className="Header__links__icon material-icons">shopping_cart</i></NavLink>
                    </NavItem>
                </Nav>
            </nav>
        </div>
    )

};
export default Header;