const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    //hier moeten console.logs komen
    console.log(`Dit is ${person.name}, hij is een echte ${person.profession}`);
    const yearOfBirth = 2020 - person.age;
    console.log(`${person.name} was born in the year of ${yearOfBirth}`);
    if (yearOfBirth <= 1970) {
        console.log(`${person.name} met Abraham`);
    }
    console.log('\n');
}