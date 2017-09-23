import cartReducer from './cart';
import * as constants from '../actions/constants';

describe('cartReducer', () => {

    const initialState = {
        books: []
    };

    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState)
    });

    it('add a book to the cart', () => {
        const cart = {books: [{}]};

        expect(cartReducer(undefined, {type: constants.ADD_TO_CART, book: {}})).toEqual(cart)
    });

    it('remove a book from the cart', () => {
        const cart = {books: [{id: 0}]};

        expect(cartReducer(cart, {type: constants.REMOVE_FROM_CART, id: 0})).toEqual(initialState)
    });

})