import * as constants from './constants';

export const addToCart = (book, amount) => {
    return {
        type: constants.ADD_TO_CART,
        book,
        amount
    }
};

export const removeFromCart = (id) => {
    return {
        type: constants.REMOVE_FROM_CART,
        id
    }
};

// export const changeAmount = (id, amount) => {
//     return {
//         type: constants.REMOVE_FROM_CART,
//         book,
//         amount
//
//     }
// };