const numbers = [1,2,3,4,5,6,7,8,9,10];

module.exports.greet = function greet() {
    console.log('Hi, nice to meet you.');
}

module.exports.numbers = () => {
         let nums = numbers.map(x => x * 2);
         console.log(nums)
}

module.exports.bye = function bye() {
    console.log('Goodbye.');
}