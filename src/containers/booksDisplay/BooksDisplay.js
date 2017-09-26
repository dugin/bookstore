import React, {Component} from 'react';
import Book from "../book/Book";
import * as BooksAPI from '../../api/BooksAPI'

class BooksDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {books: [], isLoading: true};
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks() {
        BooksAPI.get()
            .then(books => this.setState({books}))
    }

    render() {
        return (
            <div className="BooksDisplay container px-0 mt-3">
                <div className="row no-gutters">
                    {this.state.books
                        .map(book => (
                            <div key={book.id} className="BooksDisplay__bookWrapper col-12 col-sm-12 col-md-6 col-lg-4  col-xl-3 ">
                                <Book book={book}/>
                            </div>
                        ))}
                </div>

            </div>
        );
    }
}

export default BooksDisplay;