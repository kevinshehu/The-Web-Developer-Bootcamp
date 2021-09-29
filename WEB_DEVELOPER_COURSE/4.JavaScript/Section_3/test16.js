const prices = [12.5, 13.7, 22.1, 99.5, 1.5];

const value = prices.reduce((total, price) => {
    return total + price;
})

const minPrice = prices.reduce((min, temporary) => {
    if (temporary < min)
        return temporary;
    return min;
})

const maxPrice = prices.reduce((max, temporary) => {
    if (temporary > max)
        return temporary;
    return max;
})