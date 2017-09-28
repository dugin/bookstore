import React, {Component} from 'react';
import './Cart.css';
import CartBook from "../cartBook/CartBook";
import {connect} from 'react-redux';
import * as utils from '../../utils/booksUtils';
import NumberFormat from 'react-number-format';

export class Cart extends Component {

    render() {
        const books = this.props.books;

        return (
            <div className="Cart container">
                {books && books.length > 0 ? (
                    <div className=" row">
                        <section className="col-md-8 col-12">
                            <CartBook/>
                        </section>
                        <section className="col-md-3 ml-auto col-12 Cart__summary">

                            {utils.setDiscountSum(books) !== 0 && (
                                <div>
                                    <div className="Cart__summary__price row">
                                        <p className="col-5 Cart__summary__price__title">Preço sem Desconto</p>

                                        <NumberFormat className="col-7 Cart__summary__price__value"
                                                      value={utils.setPriceSum(books)}
                                                      decimalPrecision={2} displayType={'text'} decimalSeparator=','
                                                      prefix={'R$ '}/>
                                    </div>

                                    <div className="Cart__summary__discount row">
                                        <p className="col-5 Cart__summary__discount__title">Desconto</p>
                                        <NumberFormat className="col-7 Cart__summary__discount__value"
                                                      value={utils.setDiscountSum(books)}
                                                      decimalPrecision={2} displayType={'text'} decimalSeparator=','
                                                      prefix={'R$ '}/>
                                    </div>
                                </div>
                            )}

                            <div className="Cart__summary__total row">
                                <p className="col-4 Cart__summary__total__title">Total</p>
                                <NumberFormat className="col-8 Cart__summary__total__value pl-0"
                                              value={utils.setDiscountedPriceSum(books)}
                                              decimalPrecision={2} displayType={'text'} decimalSeparator=','
                                              prefix={'R$ '}/>
                            </div>
                        </section>
                    </div>
                ) : (
                    <section className="Cart__empty">
                        <i className="material-icons">shopping_cart</i>
                        <p className="Cart__empty__message">Seu carrinho está vazio.</p>

                    </section>
                )}
            </div>
        )
    }

}

export const mapStateToProps = (state, props) => ({books: state.books});


export default connect(mapStateToProps, null)(Cart);