import * as constants from './constants';
import * as actions from './cart';

it('creates an action to add to the Cart', () => {
    const book = {};

    const expectedAction = {type: constants.ADD_TO_CART, book};

    expect(actions.addToCart(book)).toEqual(expectedAction);
})

it('creates an action to remove from the Cart', () => {
    const id = 0;

    const expectedAction = {type: constants.REMOVE_FROM_CART, id};

    expect(actions.removeFromCart(id)).toEqual(expectedAction);
})