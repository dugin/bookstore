import React, {Component} from 'react';
import {NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';

export class Header extends Component {

    setAmount = () => {
        return this.props.books && this.props.books.reduce((acc, b) => acc + b.amount, 0);
    };

    setPrice = () => {
        return this.props.books && this.props.books.reduce((acc, b) => acc + (b.amount * b.book.price), 0);

    };

    render() {
        return (
            <div className="Header">
                {this.props.route && this.props.route.localeCompare('/') !== 0 && (
                    <Link to="/"> <i className="material-icons Header__back-arrow">keyboard_arrow_left</i></Link>
                )}
                <nav className="container px-3 px-sm-0 Header__block">
                    <NavbarBrand className="Header__title" href="/">Bookstore</NavbarBrand>
                    <Nav className="Header__links">
                        <NavItem>
                            <div className="Header__links__wrapper">
                                <i className="Header__links__wrapper__icon material-icons">shopping_cart</i>
                                <div className="Header__links__wrapper__priceContainer">
                                    <p className="Header__links__wrapper__priceContainer__amount">
                                        {this.setAmount()} livros</p>

                                    <NumberFormat className="Header__links__wrapper__priceContainer__price"
                                                  value={this.setPrice()}
                                                  decimalPrecision={2} displayType={'text'} decimalSeparator=','
                                                  prefix={'R$ '}/>
                                </div>
                            </div>
                        </NavItem>
                    </Nav>
                </nav>
            </div>
        );
    }
}

export const mapStateToProps = (state, props) => {
    return {
        books: state.books
    }
};
export default connect(mapStateToProps, null)(Header);