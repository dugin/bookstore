import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Book} from "../containers/book/Book";
import {props} from "../__mocks__/bookMock";

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

    it('renders quantity and `Adicionar ao Carrinho` button ', () => {
        expect(book.find('.Book__actions__quantityContainer__minus').exists()).toBe(true);
        expect(book.find('.Book__actions__quantityContainer__quantity').exists()).toBe(true);
        expect(book.find('.Book__actions__quantityContainer__plus').exists()).toBe(true);
        expect(book.find('.Book__actions__addToCart').text()).toBe('Adicionar ao Carrinho');
    })
})