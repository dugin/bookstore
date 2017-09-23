import * as constants from './constants';

export const addToCart = (book) => {
    return {
        type: constants.ADD_TO_CART,
        book
    }
};

export const removeFromCart = (id) => {
    return {
        type: constants.REMOVE_FROM_CART,
        id
    }
};