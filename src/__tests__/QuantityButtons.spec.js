import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import QuantityButtons from "../containers/quantityButtons/QuantityButtons";

describe('QuantityButtons', () => {

    const book = shallow(<QuantityButtons onAddOrRemove={jest.fn()}/>);

    const plusBtn = book.find('.Book__actions__quantityContainer__plus');
    const minusBtn = book.find('.Book__actions__quantityContainer__minus');

    beforeEach(() => {
        book.setState({quantity: 1});
    });

    it('renders properly', () => {
        expect(toJson(book)).toMatchSnapshot();
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
