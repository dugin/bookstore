import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Cart from "../containers/cart/Cart";

describe('Cart Page', () => {

    const cart = shallow(<Cart/>);

    it('renders properly', () => {
        expect(toJson(cart)).toMatchSnapshot();
    });

});