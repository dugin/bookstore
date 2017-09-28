import React, {Component} from 'react';
import Book from "../book/Book";
import * as BooksAPI from '../../api/BooksAPI'
import './BooksDisplay.css'
import ReactLoading from 'react-loading';

class BooksDisplay extends Component {

    static books;

    constructor(props) {
        super(props);
        this.state = {books: [], isLoading: true};
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks() {
        this.setState({isLoading: true});

        BooksDisplay.books ? this.setBooks(BooksDisplay.books) :
            BooksAPI.get()
                .then(books => {
                    this.setBooks(books);
                })
    }

    setBooks(books) {
        BooksDisplay.books = books;
        this.setState({books, isLoading: false})
    }

    render() {
        return (
            <div className="BooksDisplay container px-0 mt-3">
                {this.state.isLoading ? (
                    <div className="BooksDisplay__loading">
                        <ReactLoading className="mb-4" type="spinningBubbles" delay={0} color="#c33fa3" height={75} width={75}/>
                        Carregando...</div>
                ) : (
                    <div className="row no-gutters">
                        {this.state.books
                            .map(book => (
                                <div key={book.id}
                                     className="BooksDisplay__bookWrapper col-12 col-sm-12 col-md-6 col-lg-4  col-xl-3 ">
                                    <Book book={book}/>
                                </div>
                            ))}
                    </div>
                )}

            </div>
        );
    }
}

export default BooksDisplay;