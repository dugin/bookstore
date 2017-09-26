import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Header, mapStateToProps} from '../components/header/Header';
import {props} from "../__mocks__/bookMock";

describe('Header', () => {
    const header = shallow(<Header/>);

    it('renders properly', () => {
        expect(toJson(header)).toMatchSnapshot();
    });

    it('contains the title `Bookstore` ', () => {
        expect(header.contains('Bookstore')).toBe(true);
    });

    it('contains the cart icon', () => {
        expect(header.find('i').contains('shopping_cart')).toBe(true);
    });

    it('contains total value and amount of books in the cart when not empty', () => {
        header.setProps({books: [props]});

        const amount = header.find('.Header__links__wrapper__priceContainer__amount');
        const price = header.find('.Header__links__wrapper__priceContainer__price');

        expect(price.exists()).toBe(true);
        expect(amount.exists()).toBe(true);

        expect(header.instance().setPrice()).toEqual(90);
        expect(header.instance().setAmount()).toEqual(2);

    });

    describe('arrow left icon', () => {
        function setProps(props) {
            return shallow(<Header {...props} />);
        }

        it('show it when route is not home path', () => {
            const header = setProps({route: '/teste'});

            expect(header.find('i').contains('keyboard_arrow_left')).toBe(true);
        });

        it('does not show it when is home path', () => {
            const header = setProps({route: '/'});

            expect(header.find('i').contains('keyboard_arrow_left')).toBe(false);
        });

    });

    it('mapStateToProps properly', () => {

        expect(mapStateToProps(props, null)).toEqual({book: header.instance().props.book});
    });


});