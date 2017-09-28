import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Header, mapStateToProps} from '../containers/header/Header';
import {props} from "../__mocks__/bookMock";

describe('Header', () => {
    const header = shallow(<Header/>);

    it('renders properly', () => {
        expect(toJson(header)).toMatchSnapshot();
    });

    it('contains the title `Livraria` ', () => {
        expect(header.contains('Livraria')).toBe(true);
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

        expect(header.instance().setPrice()).toEqual(80);
        expect(header.instance().setAmount()).toEqual(2);

    });

    it('mapStateToProps properly', () => {

        expect(mapStateToProps(props, null)).toEqual({book: header.instance().props.book});
    });

    describe('arrow left icon', () => {
        function setProps(props) {
            return shallow(<Header {...props} />);
        }

        it('show it when route is not home path', () => {
            header.setState({route: '/carrinho'});

            expect(header.find('.Header__block__back-arrow').contains('keyboard_arrow_left')).toBe(true);
        });

        it('does not show it when is home path', () => {
            header.setState({route: '/'});

            expect(header.find('.Header__block__back-arrow').contains('keyboard_arrow_left')).toBe(false);
        });

        it('click on it', () => {
            header.setState({route: '/carrinho'});
            header.setProps({history: {goBack: jest.fn()}});

            const backBtn = header.find('.Header__block__back-arrow').parent();

            backBtn.simulate('click');

            expect(header.instance().props.history.goBack).toHaveBeenCalled();
        });
    });

});