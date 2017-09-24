import React  from 'react';
import {shallow} from 'enzyme'
import BooksDisplay from '../containers/booksDisplay/BooksDisplay';
import toJson from 'enzyme-to-json';

describe('Books Display', () => {

    const booksDisplay = shallow(<BooksDisplay/>);

    it('renders properly', () => {
        expect(toJson(booksDisplay)).toMatchSnapshot();
    })
})