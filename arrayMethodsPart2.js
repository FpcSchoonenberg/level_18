const superHeroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]


// const zoekHeld = (naamHeld) => naamHeld.name === "Superman" ;
// const zoek = () => superHeroes.find(zoekHeld);
const zoek = (data) => data.find(item => item.name === "Spiderman");
console.log(zoek(superHeroes));

const a = "Spiderman";
if (superHeroes[2].name === a) {
    console.log("prima");
}
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}