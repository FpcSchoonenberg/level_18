const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" },
];
const findSpiderMan = (superheroes) => superheroes.find(element => element.name == "Spiderman");
console.log(findSpiderMan(superheroes));
const a = typeof 10;

console.log(a);

