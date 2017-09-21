import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe('Header', () => {
    const app = shallow(<Header/>);

    it('renders properly', () => {
        expect(toJson(app)).toMatchSnapshot();
    });

    it('contains the title `Bookstore` ', () => {
        expect(app.contains('Bookstore')).toBe(true);
    });

    it('contains the cart icon', () => {
        expect(app.find('i').contains('shopping_cart')).toBe(true);
    });

})