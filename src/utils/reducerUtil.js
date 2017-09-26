export const isBookOnArray = (action, books) => {
    return books.findIndex(b => b.book.id === action.book.id) > -1;
};

export const increaseBookAmount = (action, books) => {
    return books.map(b => {
        return b.book.id === action.book.id ? {...b, amount: b.amount + action.amount} : b;
    });
}