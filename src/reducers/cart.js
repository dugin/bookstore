import * as constants from '../actions/constants';

const initialState = {
    books: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_TO_CART:
            return {
                ...state,
                books: [...state.books, action.book]
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