// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


let v = 'apple';
let vv = reverse(v);
console.log(vv);

function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, characters) => characters + reversed, '')

}

module.exports = reverse;

// sol 1
// const arr = str.split('');
// arr.reverse();
// return arr.join('');


//     return str.split("").reverse().join("");

//sol 2
// function reverse(str) {
//     let reversed = '';
//     for (let char of str) {
//         reversed = char + reversed;
//         console.log(reversed);
//     }
//     return reversed;
// }

//sol 3

// function reverse(str) {
//     return str.split('').reduce((reversed, characters) => {
//         return characters + reversed;

//     }, '')

// }