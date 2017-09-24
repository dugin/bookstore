const CART = 'CART';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(CART);

        return serializedState === null ? undefined : JSON.parse(serializedState);

    } catch (err) {
        return undefined;
    }
};

export const saveState = (cart) => {
    try {
        const serializedState = JSON.stringify(cart);

        localStorage.setItem(CART, serializedState);

    } catch (err) {
        return new Error('Erro na serialização do objeto');
    }
}