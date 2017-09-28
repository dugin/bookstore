import React from 'react';
import {mount, shallow} from 'enzyme';
import BooksDisplay from '../containers/booksDisplay/BooksDisplay';
import toJson from 'enzyme-to-json';
import {Book} from "../containers/book/Book";
import {props} from "../__mocks__/bookMock";
import sinon from 'sinon';
import * as BooksAPI from '../api/BooksAPI';
import ReactLoading from 'react-loading';

describe('Books Display', () => {

    const booksDisplay = shallow(<BooksDisplay/>);

    beforeEach( ()=>{
        booksDisplay.setState({books: [props], isLoading: false});
    });

    it('renders properly', () => {
        expect(toJson(booksDisplay)).toMatchSnapshot();
    });

    it('calls componentDidMount', () => {
        sinon.spy(BooksDisplay.prototype, 'componentDidMount');
        mount(<BooksDisplay/>);
        expect(BooksDisplay.prototype.componentDidMount.calledOnce).toBe(true);
    });

    it('checks books from state', () => {

        expect(booksDisplay.state().books).toEqual([props]);
    });

    it('sets Books to the state', () => {
        expect(booksDisplay.instance().setBooks([])).toEqual(booksDisplay.state.books);
    });

    it('loads books when done loading ', () => {
        expect(booksDisplay.find('Connect(Book)').exists()).toBe(true);
    });

    it('show loading when fetching from api ', () => {
        booksDisplay.setState({isLoading: true});

        expect(booksDisplay.find(ReactLoading).exists()).toBe(true);
    });

})