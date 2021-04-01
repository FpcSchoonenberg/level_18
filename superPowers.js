const superHeroes=[
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "500"
    }
]

/* //use reduce, map and filter
//part 1 create an array with all superheroes.name
const getHeroNames = (superHeroes) => superHeroes.map(item => item.name);
const  heroNames = console.log(getHeroNames(superHeroes));

//part2 create an array with heroes < 190 pounds
const getWeightHeroes = (superHeroes => superHeroes.filter(item => item.weight < 190));
const lightHeroes = console.log(getWeightHeroes(superHeroes));

//part3 crete an array with all 200 pound heroes
const get200PoundHeroes = (superHeroes) => superHeroes.filter(item => item.weight == 200);
const Heroes200Pound = console.log(get200PoundHeroes(superHeroes));

//create array with first appearances and heroname
const getFirstAppeance = (superHeroes) => superHeroes.map(item =>item.first_appearance+item.name);
console.log(getFirstAppeance(superHeroes)); */

//create array with heros and publisher
const getHeroesPerPublisher = (superHeroes, publisher) => superHeroes.filter(item => item.publisher === publisher);
const showHeroesPerPublisher = getHeroesPerPublisher(superHeroes, "Marvel Comics");
console.log(showHeroesPerPublisher);

//create new array with all weights
const getWeightHeroPublisher = showHeroesPerPublisher.map(item => item.weight);
console.log(getWeightHeroPublisher);

// //use reduce for to sum the totalweight
const totalWeight = getWeightHeroPublisher.reduce((intWeight, curWeight)=> parseInt(intWeight) + parseInt(curWeight));
console.log(totalWeight);

//check for values that are not number with typeof, when use .filter the original dataset has not been mutated
const checkMasterData = superHeroes.filter(item => {
    if (item.weight === "unknown") {
        console.log("Check your masterdata");
    }
});
console.log(checkMasterData);

//zoek zwaarste Hero, modify stringvalues to int, so it is possible to determine the highest value
const getWeight = superHeroes.map(item => parseInt(item.weight));
const heaviestHero = Math.max.apply(Math, getWeight);
const getHeaviestHeroName = (heaviestHero) => superHeroes.find(item => item.weight == heaviestHero);
console.log(getHeaviestHeroName(heaviestHero));







