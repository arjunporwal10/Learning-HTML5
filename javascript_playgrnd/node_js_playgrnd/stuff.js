var counter = function(arr){
    return 'There are ' + arr.length + ' elemnets in this array';
}

var adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
};

var pi = 3.14;

// // module.exports.counter = counter;
// // module.exports.adder = adder;
// // module.exports.pi = pi;
// module.exports.counter = function (arr) {
//     return 'There are ' + arr.length + ' elemnets in this array';
// }

// module.exports.adder = function (a, b) {
//     return `The sum of the two numbers is ${a + b}`;
// };

//Module patterns 
// This can also be used
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// THIS ALSO WORKS
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};