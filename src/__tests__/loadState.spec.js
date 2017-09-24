import {loadState, saveState} from '../utils/loadState';

require("../mocks/localStorageMock.js");


describe('Local Storage', () => {

    beforeEach(() => {
        localStorage.clear();
    });

    it('should load a empty state', () => {



        expect(loadState()).toEqual(undefined);
    });

    it('should save a state and retrieve it', () => {
        const cart = {};

        saveState(cart);

        expect(loadState()).toEqual({});
    });

});