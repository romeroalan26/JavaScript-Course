/*
// Importing modula
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing module');
// addToCart('bread', 5);

// console.log(price, tq);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('apple', 5);
add('mangoes', 7);

console.log(cart);


// console.log('Sart fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('apple', 5);
add('mangoes', 7);

console.log(cart);

// Introduction to NPM
// import { cloneDeep } from 'lodash-es/node_modules/cloneDeep.js';

// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };

// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
