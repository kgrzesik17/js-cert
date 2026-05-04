// importing module

/*
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);
console.log('Importing module');
*/

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5); // like an API
console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 4);

console.log(cart); // cart is not [] anymore
