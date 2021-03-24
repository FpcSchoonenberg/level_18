

* const ikRockArrowFunctions = () => "Joe, ik rock de arrow functions";
* console.log(`resultaat arrowrockfunction ${ikRockArrowFunctions()}`);

const fivePlusSeven = () => 5 + 7;
console.log(`resultaat fivePlusSeven  ${fivePlusSeven()}`);

const sum = a => a + 5;
console.log(`resultaat sum(100)  ${sum(100)}`);

const createObject = () => ({ greeting: "hoi" });
console.log(`resultaat createObject  ${createObject()}`);

let fruits = [
    { name: "banana", cost: 10 },
    { name: "orange", cost: 15 },
    { name: "kiwi", cost:25 },
    { name: "apple", cost: 15 },
    { name: "coconut", cost: 15 },
    { name: "kaki", cost: 5 },
    { name: "cherrry", cost: 1 },
    { name: "mango", cost: 2 },
    { name: "peach", cost: 13 }
];

const selectedFruits = fruits.filter((item) => {
    
    if (item.cost <= 5) {
        return item
    }
});
console.log(selectedFruits.length);
let test = selectedFruits.length
console.log(test);
selectedFruits.forEach(fruit => console.log(fruit.name));
    


    





