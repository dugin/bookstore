import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';
import * as utils from '../../utils/booksUtils';
import {withRouter} from 'react-router-dom';

export class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {route: window.location.pathname};

        this.listenToRouteChange();
    }

    listenToRouteChange() {
        this.props.history && this.props.history
            .listen((location) => {
                this.setState({route: location.pathname})
            });
    }

    setAmount = () => {
        return utils.setBooksAmount(this.props.books);
    };

    setPrice = () => {
        return utils.setPriceSum(this.props.books);
    };

    render() {
        return (
            <div className="Header">

                <nav className="container px-3 px-sm-0 Header__block">
                    {this.state.route && this.state.route.localeCompare('/') !== 0 && (
                        <a onClick={() => this.props.history.goBack()}>
                            <i className="material-icons Header__block__back-arrow">keyboard_arrow_left</i>
                        </a>
                    )}
                    <span className="Header__title navbar-brand" href="/">Livraria</span>
                    <div className="Header__links">

                        {this.state.route && this.state.route.localeCompare('/carrinho') !== 0 && (
                        <Link to="/carrinho" className="Header__links__wrapper">
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

                        </Link>
                        )}

                    </div>
                </nav>
            </div>
        );
    }
}

export default connect((state, props) =>({ books: state.books}), null)(withRouter(Header));