// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })

}

let v = 'abcba';
let vv = palindrome(v);
console.log(vv);

module.exports = palindrome;

//sol : 1
// function palindrome(str) {

//     const r = str.split('').reduce((rev, char) => char + rev);
//     return str === r
//         // if (str === r) {
//         //     return true;
//         // } else return false;

// }