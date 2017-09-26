import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Book, mapStateToProps, mapDispatchToProps} from "../containers/book/Book";
import {props} from "../__mocks__/bookMock";
import sinon from 'sinon';
import {addToCart} from "../actions/cart";

describe('Book', () => {

    const book = shallow(<Book {...props}/>);

    it('renders properly', () => {

        expect(toJson(book)).toMatchSnapshot();

    });

    it('renders its image, name, description, price', () => {
        expect(book.find('.Book__figureContainer__img').exists()).toBe(true);
        expect(book.find('.Book__figureContainer__caption__name').exists()).toBe(true);
        expect(book.find('.Book__figureContainer__caption__description').exists()).toBe(true);
        expect(book.find('.Book__valueContainer__price').exists()).toBe(true);

    });

    it('renders discount price and tag if exists', () => {
        expect(book.find('.Book__valueContainer__discount').exists()).toBe(true);
        expect(book.find('.Book__figureContainer__discountTag').exists()).toBe(true);
    });

    it('renders quantity and `Adicionar ao Carrinho` button ', () => {
        expect(book.find('.Book__actions__quantityContainer__minus').exists()).toBe(true);
        expect(book.find('.Book__actions__quantityContainer__quantity').exists()).toBe(true);
        expect(book.find('.Book__actions__quantityContainer__plus').exists()).toBe(true);
        expect(book.find('.Book__actions__addToCart').text()).toBe('Adicionar ao Carrinho');
    });

    describe('Add/Subtract buttons', () => {

        const plusBtn = book.find('.Book__actions__quantityContainer__plus');
        const minusBtn = book.find('.Book__actions__quantityContainer__minus');

        beforeEach(() => {
            book.setState({quantity: 1});
        });

        it('adds one on plus button click ', () => {
            expect(plusBtn.length).toEqual(1);
            plusBtn.simulate('click');

            expect(book.state().quantity).toEqual(2);
        });

        it('do not subtract on minus button if quantity == 1', () => {
            expect(plusBtn.length).toEqual(1);
            expect(minusBtn.length).toEqual(1);

            minusBtn.simulate('click');

            expect(book.state().quantity).toEqual(1);
        });

        it('subtract one on minus button click if quantity > 1', () => {
            book.setState({quantity: 3});

            expect(minusBtn.length).toEqual(1);
            minusBtn.simulate('click');

            expect(book.state().quantity).toEqual(2);
        });
    });


    it('click on Add to Cart button', () => {
        book.setState({amount: 1});

        const addToCartBtn = book.find('.Book__actions__addToCart');

        expect(addToCartBtn.length).toEqual(1);

        addToCartBtn.simulate('click');

        expect(book.instance().props.addToCart).toHaveBeenCalled();
    });

    it('mapStateToProps properly', () => {

        expect(mapStateToProps(null, props)).toEqual({book: book.instance().props.book});
    });

    it('mapDispatchToProps properly', () => {

        expect(JSON.stringify(mapDispatchToProps(jest.fn()))).toEqual(JSON.stringify({addToCart: jest.fn()}))

    })


});