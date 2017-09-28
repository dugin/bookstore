import React, {Component} from 'react';
import BookInfo from "../../components/bookInfo/BookInfo";
import {connect} from 'react-redux';
import './CartBook.css';
import QuantityButtons from "../quantityButtons/QuantityButtons";
import * as utils from "../../utils/booksUtils";
import NumberFormat from 'react-number-format';
import {removeFromCart, addToCart} from "../../actions/cart";


export class CartBook extends Component {

    setPrice = (b) => {
        return utils.setPrice(b.discount, b.price);
    };


    onAddOrRemove = (quantity, b) => {
        const diff = quantity - b.amount;
        this.props.changeAmount(b.book, diff);
    };

    removeBook = (id) => {
        this.props.removeFromCart(id);
    };

    render() {

        return (
            <div className="CartBook ">
                {this.props.books.map(b => (
                    <div className="CartBook__item row" key={b.book.id}>
                        <div className="col-sm-7 col-md-8 col-9 pr-0">
                            <BookInfo   {...b}/>
                            <QuantityButtons
                                amount={b.amount}
                                onAddOrRemove={(quantity) => this.onAddOrRemove(quantity, b)}
                            />
                        </div>
                        <div className="CartBook__item__price col-sm-5 col-md-3 col-3 ">
                            <div>
                                <span className="CartBook__item__price__amount mr-1"> {b.amount}x</span>
                                <NumberFormat className="  CartBook__item__price__unit"
                                              value={this.setPrice(b.book)}
                                              decimalPrecision={2} displayType={'text'} decimalSeparator=','
                                              prefix={'R$ '}/>
                            </div>
                            <NumberFormat className=" CartBook__item__price__total"
                                          value={b.amount * this.setPrice(b.book)}
                                          decimalPrecision={2} displayType={'text'}
                                          decimalSeparator=',' prefix={'R$ '}/>
                        </div>

                        <a onClick={() =>this.removeBook(b.book.id)} className="CartBook__item__remove  pr-0 col-md-2">
                            <i  className="material-icons">highlight_off</i>excluir</a>
                    </div>
                ))}

            </div>
        )
    }

}

export const mapDispatchToProps = (dispatch) => {
    return {
        changeAmount: (book, amount) => dispatch(addToCart(book, amount)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    }
};


export const mapStateToProps = (state, props) => ({books: state.books});


export default connect(mapStateToProps, mapDispatchToProps)(CartBook);