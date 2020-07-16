const _ = require("lodash");

// Times - Recebe um numero que vai ser o número de iteração
// Irá iterar por 5 vezes e gerar 5 numeros distintos
// Toda função do lodash vai retornar algo para a variavel
var times = _.times(5, function () {
  // return Math.round(Math.random() * 100); // Normal
  return _.random(100); // Com lodash
});

console.log("times result: ", times);

// Ronde no console
// $ node index.js

let numbers = [81, 92, 12, 20, 10];

let filter = _.filter(numbers, function (num) {
  return num <= 89;
});

console.log("filter result: ", filter);

// Ronde no console
// $ node index.js

let map = _.map(numbers, function (number) {
  return number * 2;
});

console.log("map result: ", map);

let name = "ANDRE LUIZ DA SILVA";
name = _.capitalize(name);
console.log("capitalize name: ", name);

name = _.toLower(name);
console.log("lowercase name: ", name);

name = _.camelCase(name);
console.log("camelCase name: ", name);

// Verificação qual é a ultima letra
name = _.endsWith(name, "a");
console.log("endsWith name: ", name);

// padEnd e padStar ajuda a trabalhar com a formatação do texto
// ideal para integrar sistemas um com outro
// recebe 3 paramentros, 1= string, 2= numeros de caracteres, 3= caracter adicional
let user = "ANDRE LUIZ DA SILVA";
user = _.padEnd(user, 20, ";");
console.log("padEnd name: ", user);

// Reduce - Captura uma coleção de dados e reduz a uma apenas
// Neste caso estamos somando todos os valores
let collection = [1, 2, 3, 4, 5];
let resultCollec = _.reduce(collection, function (op, number) {
  return op + number;
});
console.log("reduce result: ", resultCollec);

// Objetos
let obj = { a: 2, c: 7, d: 10 };
let resultPick = _.pick(obj, "c");
console.log("pick result", resultPick);

// Mostrar objet em formato de array
let member = {
  name: "Andre Luiz da Silva",
  age: 35,
  birth: "28-07-1984",
  country: "Brazil",
};
let converteObjInArr = _.values(member);
console.log("converte objt in array result: ", converteObjInArr);

// Ocultar dados do objet
let valorOmitido = _.omit(member, ["birth", "country"]);
console.log("valor omitido result: ", valorOmitido);
