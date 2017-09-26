import cartReducer from '../reducers/cart';
import * as constants from '../actions/constants';
import * as util from '../utils/booksUtils';

describe('cartReducer', () => {

    const initialState = {
        books: []
    };

    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState)
    });

    it('add a book to the cart', () => {
        const cart = {books: [{book: {}, amount: 1}]};

        expect(cartReducer(undefined, {type: constants.ADD_TO_CART, book: {}, amount: 1})).toEqual(cart)
    });

    it('increase amount to a book already in the cart', () => {
        const cart = {books: [{book: {id: 1}, amount: 1}]};

        expect(cartReducer(cart, {type: constants.ADD_TO_CART, book: {id: 1}, amount: 1}))
            .toEqual({books:util.increaseBookAmount({amount: 1, book: {id: 1} }, cart.books)})
    });

    it('remove a book from the cart', () => {
        const cart = {books: [{id: 0}]};

        expect(cartReducer(cart, {type: constants.REMOVE_FROM_CART, id: 0})).toEqual(initialState)
    });

})