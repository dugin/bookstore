import * as utils from '../utils/booksUtils';
import {props} from "../__mocks__/bookMock";


describe('utils', ()=>{


    it('get the price sum',  ()=>{

        expect(utils.setPriceSum([props])).toEqual(90);
    });

    it('get the discount sum',  ()=>{

        expect(utils.setDiscountSum([{amount: 1, book: {}}])).toEqual(0);
        expect(utils.setDiscountSum([props])).toEqual(10);
    });

    it('get the price',  ()=>{

        expect(utils.setPrice(5, 10)).toEqual(5);
        expect(utils.setPrice(null, 10)).toEqual(10);

    })
});