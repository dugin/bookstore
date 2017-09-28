import React from 'react';
import {shallow,} from 'enzyme';
import toJson from 'enzyme-to-json';
import {CartBook, mapDispatchToProps, mapStateToProps} from "../containers/cartBook/CartBook";
import {props} from '../__mocks__/bookMock';

describe('Book', () => {

    delete props.addToCart;
    const books = [props];

    const cartBook = shallow(<CartBook removeFromCart={jest.fn()} changeAmount={jest.fn()}  books={books}/>);

    it('renders properly', () => {
        expect(toJson(cartBook)).toMatchSnapshot();
    });

    it('mapStateToProps properly', () => {
        expect(mapStateToProps({books: [props]}, null)).toEqual({books: cartBook.instance().props.books});
    });

    it('clicks on `excluir` button, triggers `removeFromCart`', () => {
        const btn = cartBook.find('.CartBook__item__remove');

        btn.simulate('click');

        expect(cartBook.instance().props.removeFromCart).toHaveBeenCalled();
    });

    it('clicks on add or remove buttons, triggers `changeAmount`', () => {

        cartBook.instance().onAddOrRemove(5, {amount: 1});

        expect(cartBook.instance().props.changeAmount).toHaveBeenCalled();
    });

    it('mapDispatchToProps properly', () => {
        expect(JSON.stringify(mapDispatchToProps(jest.fn()))).toEqual(JSON.stringify({changeAmount: jest.fn(), removeFromCart: jest.fn()}))
    })



});
