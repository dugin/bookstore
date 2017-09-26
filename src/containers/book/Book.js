import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Book.css';
import NumberFormat from 'react-number-format';
import {addToCart} from '../../actions/cart';

export class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {quantity: 1, shouldShowSuccessMsg: false};
    }

    setPrice = () => {
        return this.props.book.discount ? this.props.book.price - this.props.book.discount : this.props.book.price;
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


    render() {
        return (
            <div className="Book container">
                <figure className="Book__figureContainer">
                    {this.props.book.discount && (
                        <div className="Book__figureContainer__discountTag">{this.setDiscountTag()}</div>
                    )}
                    <img src={this.props.book.imageLinks.thumbnail} className="Book__figureContainer__img" alt=""/>
                    <figcaption className="Book__figureContainer__caption">
                        <h5 className="Book__figureContainer__caption__name"> {this.props.book.title}</h5>
                        <p className="Book__figureContainer__caption__description"> {this.props.book.description}</p>
                    </figcaption>
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
                    <div className="Book__actions__quantityContainer">
                        <button onClick={() => this.setState(state => {
                                state.quantity > 1 ? state.quantity-- : 1
                            }
                        )} className="Book__actions__quantityContainer__minus"> -
                        </button>

                        <span className="Book__actions__quantityContainer__quantity"> {this.state.quantity} </span>

                        <button onClick={() => this.setState(state => {
                                state.quantity++
                            }
                        )} className="Book__actions__quantityContainer__plus "> +
                        </button>

                    </div>
                    <button onClick={this.addBookToCart} className="Book__actions__addToCart">
                        Adicionar ao Carrinho
                    </button>
                </section>

                {this.state.shouldShowSuccessMsg && (
                    <div className="Book__alert">
                        <div className="Book__alert__container">
                        <div><i className="material-icons mr-2 Book__alert__container__icon">check_circle</i></div>
                        <div className="Book__alert__container__msg">Adicionado ao seu Carrinho!</div>
                            <button className="Book__alert__container__goToCart--btn">
                                Finalizar Compra
                            </button>
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

export const mapStateToProps = (state, props) => {
    return {
        book: props.book
    }
};
export const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (book, amount) => dispatch(addToCart(book, amount)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);