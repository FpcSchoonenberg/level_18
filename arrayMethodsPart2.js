const superHeroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]


//find string in an array via array.find
//part A
const a = "Batman";
const zoek = (data,a) => data.find(item => item.name === a);
console.log(zoek(superHeroes, a));


//create a new array using array.map
//part B
const arrayValues = [1, 2, 3];
const doubleArrayValues = (arrayvalues) => arrayValues.map(item => item * 2);
console.log(doubleArrayValues(arrayValues));

// check Array for a greater then value
//part C
const arrayIntegers = [1, 4, 3, 6, 9, 7, 11];
const checkBiggerThen = (arrayIntegers, checkInt) => arrayIntegers.some(item => item >= checkInt);
console.log(`console.log(checkBiggerThen(arrayIntegers, 4));`);
console.log(checkBiggerThen(arrayIntegers, 40));

// check if array contains specific string and returns a boolean
//part D
const greatSeven = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const isCountryInTheGreat7 = (greatSeven, country) => greatSeven.some(item => item === country);
console.log(isCountryInTheGreat7(greatSeven, "Japan"));
console.log(greatSeven.includes("japan"));


// multiply every element and place in new array
//part E
const oneFold = [1, 4, 3, 6, 9, 7, 11];
const tenFold = (oneFold, multiplier) => oneFold.map(item => item * multiplier);
console.log(tenFold(oneFold,20));


//check value of every element and compare, result boolean
//part F
const someNumbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
const isBelowN = (data, checkInt) => someNumbers.every(item => item > checkInt);
console.log(isBelowN(someNumbers, 50));

//sum all values of the array using reduce
//part G
const manyNumbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = (manyNumbers) => manyNumbers.reduce((periodSum, currentValue) => periodSum + currentValue);
console.log(bigSum(manyNumbers));



