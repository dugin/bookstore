import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Book, mapStateToProps, mapDispatchToProps} from "../containers/book/Book";
import {props} from "../__mocks__/bookMock";
import QuantityButtons from "../containers/quantityButtons/QuantityButtons";
import {MemoryRouter} from 'react-router-dom'

describe('Book', () => {

    const book = mount(<Book {...props}/>);

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

    it('renders `QuantityButtons` Component ', () => {
        expect(book.find(QuantityButtons).exists()).toBe(true);
    });

    it('sets the quantity from `QuantityButtons` Component', () => {

        book.instance().onAddOrRemove(5);

        expect(book.instance().state.quantity).toEqual(5);
    });


    it('renders `Adicionar ao Carrinho` button ', () => {
        expect(book.find('.Book__actions__addToCart').text()).toBe('Adicionar ao Carrinho');
    });

    describe('on Add to a Cart Button', () => {

        mount(<MemoryRouter><Book {...props}/></MemoryRouter>);
        const b = shallow(<Book {...props}/>);


        it('clicks on it', () => {

            b.setState({amount: 1});

            const addToCartBtn = b.find('.Book__actions__addToCart');

            expect(addToCartBtn.length).toEqual(1);

            addToCartBtn.simulate('click');

            expect(b.instance().props.addToCart).toHaveBeenCalled();
        });

        it('renders overlay when clicked', () => {

            b.setState({shouldShowSuccessMsg: true});

            expect(b.find('.Book__alert__container__icon').exists()).toBe(true);
            expect(b.find('.Book__alert__container__msg').text()).toEqual('Adicionado ao seu Carrinho!');
            expect(b.find('.Book__alert__container__goToCart--btn').contains('Finalizar Compra')).toBe(true);
            expect(b.find('.Book__alert__container__pickMore--btn').text()).toEqual('Escolher mais livros');
        });
    });


    it('mapDispatchToProps properly', () => {
        expect(JSON.stringify(mapDispatchToProps(jest.fn()))).toEqual(JSON.stringify({addToCart: jest.fn()}))
    })


});