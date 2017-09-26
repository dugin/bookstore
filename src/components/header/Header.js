import React, {Component} from 'react';
import {NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';
import * as utils from '../../utils/booksUtils';

export class Header extends Component {

    setAmount = () => {
        return utils.setBooksAmount(this.props.books);
    };

    setPrice = () => {
        return utils.setPriceSum(this.props.books);
    };

    render() {
        return (
            <div className="Header">
                {this.props.route && this.props.route.localeCompare('/') !== 0 && (
                    <Link to="/"> <i className="material-icons Header__back-arrow">keyboard_arrow_left</i></Link>
                )}
                <nav className="container px-3 px-sm-0 Header__block">
                    <span className="Header__title navbar-brand" href="/">Bookstore</span>
                    <div className="Header__links">

                        <a className="Header__links__wrapper">
                            <i className="Header__links__wrapper__icon material-icons">shopping_cart</i>

                            {this.props.books && this.props.books.length > 0 && (
                                <div className="Header__links__wrapper__priceContainer">
                                    <p className="Header__links__wrapper__priceContainer__amount">
                                        {this.setAmount()} livros</p>

                                    <NumberFormat className="Header__links__wrapper__priceContainer__price"
                                                  value={this.setPrice()}
                                                  decimalPrecision={2} displayType={'text'} decimalSeparator=','
                                                  prefix={'R$ '}/>
                                </div>
                            )}

                        </a>

                    </div>
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