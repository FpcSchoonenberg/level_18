

const ikRockArrowFunctions = () => "Joe, ik rock de arrow functions";
console.log(`resultaat arrowrockfunction ${ikRockArrowFunctions()}`);

const fivePlusSeven = () => 5 + 7;
console.log(`resultaat fivePlusSeven  ${fivePlusSeven()}`);

const sum = a => a + 5;
console.log(`resultaat sum(100)  ${sum(100)}`);

const createObject = () => ({ greeting: "hoi" });
console.log(`resultaat createObject  ${createObject()}`);

let fruits = [
    { name: "banana", cost: 10, country: "brasil"},
    { name: "orange", cost: 15, country: "brasil"},
    { name: "orange", cost: 15, country: "congo"},
    { name: "kiwi", cost: 25 ,country: "brasil"},
    { name: "apple", cost: 15 ,country: "brasil"},
    { name: "coconut", cost: 15, country: "cuba" },
    { name: "kaki", cost: 5, country: "brasil" },
    { name: "cherrry", cost: 1, country: "brasil"},
    { name: "mango", cost: 2, country: "brasil" },
    { name: "peach", cost: 13, country: "brasil"}
];

const selectedFruits = fruits.filter((item) => {
    
    if (item.country !== "brasil") {
        return item
    }
});
console.log(selectedFruits.length);
let test = selectedFruits.length
console.log(test);
selectedFruits.forEach(fruit => console.log(`${ fruit.name } comes from ${fruit.country}`));
   
const fruitExtra = fruits.map(item => item.cost + 100);
fruitExtra.forEach(item => console.log(item));


const a = (number) => number + 5;
console.log(a(5));





