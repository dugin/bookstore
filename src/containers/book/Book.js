import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Book.css';
import NumberFormat from 'react-number-format'

export class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {quantity: 1};
    }

    setPrice = () => {
        return this.props.book.discount ? this.props.book.price - this.props.book.discount : this.props.book.price;
    };

    setDiscountTag = () => {
        return `${Math.ceil((this.props.book.discount / this.props.book.price) * 100)}% OFF`
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
                                      decimalPrecision={2} displayType={'text'} decimalSeparator=',' prefix={'R$'}/>
                    )}

                    <NumberFormat className="Book__valueContainer__price" value={this.setPrice()}
                                  decimalPrecision={2} displayType={'text'} decimalSeparator=',' prefix={'R$'}/>
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
                    <button className="Book__actions__addToCart">
                        Adicionar ao Carrinho
                    </button>
                </section>

            </div>
        )
    }
}

// const mapStateToProps = () => {
//     return {
//         books: state
//     }
// }

export default Book;