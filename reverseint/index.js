// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = n.toString();

    var conv = str.split('').reverse().join('');
    console.log(parseInt(conv));

    return parseInt(conv) * Math.sign(n);
}

let n = 52;
reverseInt(52);
module.exports = reverseInt;

// function reverseInt(n) {
//     let str = n.toString();

//     var conv = str.split('').reverse().join('');
//     console.log(parseInt(conv));

//     if (n < 0) {
//         return parseInt(conv) * -1;
//     } else {
//         return parseInt(conv);
//     }
// }