// arrays
const marvel_heros = ["thor","Ironman","shaktiman","dedpool"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator ;- spread

const allNewheros = [...marvel_heros, ...dc_heros]
console.log(allNewheros);

const otherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = otherArray.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("LALIT"))
console.log(Array.from("lalit"))

console.log(Array.from({name: "Lalit"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));