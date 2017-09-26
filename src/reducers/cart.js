import * as constants from '../actions/constants';
import * as util from '../utils/booksUtils';

const initialState = {
    books: []
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.ADD_TO_CART:

            return {
                ...state,
                books: util.isBookOnArray(action, state.books) ?
                    util.increaseBookAmount(action, state.books) :
                    [...state.books, {
                        book: action.book,
                        amount: action.amount
                    }]
            };
        case constants.REMOVE_FROM_CART:
            return {
                ...state,
                books: state.books.filter(book => action.id !== book.id)
            };

        default:
            return state;
    }
};

export default cartReducer;