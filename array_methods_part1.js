const typeOfwheather = ['hot', 'cold', 'windy', 'plesant'];
console.log(`${typeOfwheather.length} items in ${typeOfwheather}`);
typeOfwheather.forEach(item => console.log(item));

//add item to array via push

typeOfwheather.push('cool');
console.log(`${typeOfwheather.length} items in typOfWheather`);
typeOfwheather.forEach(item => console.log(item));

//return first element of an array via a function
const europeseLanden = ['Nederland', 'Belgie', 'Luxemburg', 'Duitsland'];
getNthElement = (specNthElement, useArray) => useArray[specNthElement];
//call to function
console.log(getNthElement(0, europeseLanden));
console.log('\n');

//function return last element of an array
const animals = ['rabbit', 'chipmunk', 'bonobo', 'koala', 'kiwi'];
const lastElement = (dataArray) => dataArray[dataArray.length - 1];
console.log(lastElement(animals));
//using slice
const presidents = ["Trump", "Obama", "Bush", "Clinton"];
const presidents2 = presidents.slice(1,4);
console.log(`${presidents} is the original dataset`);
console.log(`${presidents2} is a new dataset after slicing,the orginal is below`);
console.log(`${presidents} is the original dataset`);
//using splice
console.log("using splice");
console.log(`${presidents} is the original dataset`);
console.log('presidents.splice(0, 1)');
presidents.splice(0, 1);
console.log(presidents);
//stringstogether
console.log("stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])");
const stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
console.log(stringsTogether.join(' '));

console.log("combineArrays([1, 2, 3], [4, 5, 6])");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(array3);