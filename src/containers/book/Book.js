import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Book.css';
import NumberFormat from 'react-number-format'

export class Book extends Component {

    render() {
        return (
            <div className="Book container">
                <figure className="Book__figureContainer">
                    <img src={this.props.book.imageLinks.thumbnail} className="Book__figureContainer__img" alt=""/>
                    <figcaption className="Book__figureContainer__caption">
                        <h5 className="Book__figureContainer__caption__name"> {this.props.book.title}</h5>
                        <p className="Book__figureContainer__caption__description"> {this.props.book.description}</p>
                    </figcaption>
                </figure>

                <section className="Book__valueContainer">

                    <NumberFormat className="Book__valueContainer__price" value={this.props.book.price}
                                  decimalPrecision={2} displayType={'text'} decimalSeparator=',' prefix={'R$'}/>


                </section>

                <section className="Book__actions">
                    <div className="Book__actions__quantityContainer">
                        <button className="Book__actions__quantityContainer__minus"> - </button>
                        <span className="Book__actions__quantityContainer__quantity"> 1 </span>
                        <button className="Book__actions__quantityContainer__plus "> + </button>
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