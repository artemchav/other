'use strict';
/*
4 Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
    2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
*/
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

//filter by photos exist
console.log(products.filter(function (item) {
    return item.hasOwnProperty('photos') && item.photos.length > 0;
}));

//sort by price ↓
console.log(products.sort(function (a, b) {
    if (a.price === b.price) return 0;
    return (a.price < b.price) ? -1 : 1;
}));
