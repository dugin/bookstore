import React, {Component} from 'react';
import './Cart.scss';
import BookInfo from "../../components/bookInfo/BookInfo";
import {mapStateToProps} from "../../utils/booksUtils";

class CartBook extends  Component{

    render(){
        return (
            <div className="Cart">
                <BookInfo/>
            </div>
        )
    }

}

export default connect(mapStateToProps)(CartBook);