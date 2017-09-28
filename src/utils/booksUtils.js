export const isBookOnArray = (action, books) => {
    return books.findIndex(b => b.book.id === action.book.id) > -1;
};

export const increaseBookAmount = (action, books) => {
    return books.map(b => {
        return b.book.id === action.book.id ? {...b, amount: b.amount + action.amount} : b;
    });
};

export const setBooksAmount = (books) => {
    return books.reduce((acc, b) => acc + b.amount, 0);
};

export const setPriceSum = (books) => {
    return books.reduce((acc, b) => acc + (b.amount * b.book.price), 0);
};

export const setDiscountedPriceSum = (books) => {
    return books.reduce((acc, b) => acc + (b.amount * setPrice(b.book.discount, b.book.price)), 0);
};

export const setDiscountSum = (books) => {
    return books.reduce((acc, b) => acc + (b.book.discount ? (b.amount * b.book.discount) : 0), 0);
};

export const setPrice = (discount, price) => {
    return discount ? price - discount : price;
};
