import React from 'react';
import {mount, shallow} from 'enzyme';
import BooksDisplay from '../containers/booksDisplay/BooksDisplay';
import toJson from 'enzyme-to-json';
import {Book} from "../containers/book/Book";
import {props} from "../__mocks__/bookMock";
import sinon from 'sinon';

describe('Books Display', () => {

    const booksDisplay = shallow(<BooksDisplay/>);

    it('renders properly', () => {
        expect(toJson(booksDisplay)).toMatchSnapshot();
    });

    it('calls componentDidMount', () => {
        sinon.spy(BooksDisplay.prototype, 'componentDidMount');
        mount(<BooksDisplay/>);
        expect(BooksDisplay.prototype.componentDidMount.calledOnce).toBe(true);
    });

    it('contains `Book`', () => {
        expect(shallow(<Book {...props} key={props.id}/>).exists()).toBe(true);
    });

    it('checks books from state', () => {
        booksDisplay.setState({books: [props]});

        expect(booksDisplay.state().books).toEqual([props]);
    });


})