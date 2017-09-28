import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Cart} from "../containers/cart/Cart";
import {props} from "../__mocks__/bookMock";

describe('Cart Page', () => {

    const cart = shallow(<Cart/>);

    beforeEach(()=>{
        cart.setProps({books: []});
    })

    it('renders properly', () => {
        expect(toJson(cart)).toMatchSnapshot();
    });

    it('shows books', () => {

        cart.setProps({books: [props]});
        expect(cart.find('Connect(CartBook)').exists()).toBe(true);
    });

    it('shows empty cart', () => {

        expect(cart.find('.Cart__empty__message').text()).toEqual('Seu carrinho está vazio.');
    })

    it('shows discount when available', () => {

        cart.setProps({books: [{amount: 2, book: {discount: 5}}]});
        expect(cart.find('.Cart__summary__price').exists()).toBe(true);
        expect(cart.find('.Cart__summary__discount').exists()).toBe(true);

    })

    it(' does not show discount', () => {

        cart.setProps({books: [{amount: 2, book: {}}]});
        expect(cart.find('.Cart__summary__price').exists()).toBe(false);
        expect(cart.find('.Cart__summary__discount').exists()).toBe(false);

    })

});