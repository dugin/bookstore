import cartReducer from '../reducers/cart';
import * as constants from '../actions/constants';
import * as util from '../utils/reducerUtil';

describe('reducerUtil ', () => {

   const action = {
       amount:  1,
       book : {id: 1}
   };

    it('should do nothing to the Books Array', () => {
        const books = [{book: {id: 0}, amount : 1}];

        expect(util.increaseBookAmount(action, books)).toEqual(books);
    });

    it('should add the amount on a Book', () => {
        const books = [{book: {id: 1}, amount : 1}];

        expect(util.increaseBookAmount(action, books)).toEqual([{book: {id: 1}, amount : 2}]);
    });
})