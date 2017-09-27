import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Book.css';
import NumberFormat from 'react-number-format';
import {addToCart} from '../../actions/cart';
import QuantityButtons from "../quantityButtons/QuantityButtons";
import BookInfo from "../../components/bookInfo/BookInfo";
import {Link} from 'react-router-dom';
import * as utils from '../../utils/booksUtils'

export class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {quantity: 1, shouldShowSuccessMsg: false};
    }

    setPrice = () => {
        return utils.setPrice(this.props.book.discount, this.props.book.price);
    };

    setDiscountTag = () => {
        return `${Math.ceil((this.props.book.discount / this.props.book.price) * 100)}% OFF`
    };

    addBookToCart = () => {
        this.props.addToCart(this.props.book, this.state.quantity);
        this.showSuccessMsg();
    };

    showSuccessMsg = () => {
        this.setState({shouldShowSuccessMsg: !this.state.shouldShowSuccessMsg});
    };

    onAddOrRemove = (quantity) => {
        this.setState({quantity});
    };

    render() {
        return (
            <div className="Book container">
                <figure className="Book__figureContainer">
                    {this.props.book.discount && (
                        <div className="Book__figureContainer__discountTag">{this.setDiscountTag()}</div>
                    )}
                    <BookInfo {...this.props}/>
                </figure>

                <section className="Book__valueContainer">
                    {this.props.book.discount && (
                        <NumberFormat className="Book__valueContainer__discount" value={this.props.book.price}
                                      decimalPrecision={2} displayType={'text'} decimalSeparator=',' prefix={'R$ '}/>
                    )}

                    <NumberFormat className="Book__valueContainer__price" value={this.setPrice()}
                                  decimalPrecision={2} displayType={'text'} decimalSeparator=',' prefix={'R$ '}/>
                </section>

                <section className="Book__actions">
                    <QuantityButtons
                        onAddOrRemove={this.onAddOrRemove}
                    />
                    <button onClick={this.addBookToCart} className="Book__actions__addToCart">
                        Adicionar ao Carrinho
                    </button>
                </section>

                {this.state.shouldShowSuccessMsg && (
                    <div className="Book__alert">
                        <div className="Book__alert__container">
                            <div><i className="material-icons mr-2 Book__alert__container__icon">check_circle</i></div>
                            <div className="Book__alert__container__msg">Adicionado ao seu Carrinho!</div>
                            <Link to="/carrinho" className="Book__alert__container__goToCart--btn">
                                Finalizar Compra
                            </Link>
                            <button onClick={this.showSuccessMsg} className="Book__alert__container__pickMore--btn">
                                Escolher mais livros
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (book, amount) => dispatch(addToCart(book, amount)),
    }
};

export default connect((state, props) => ({book: props.book}), mapDispatchToProps)(Book);