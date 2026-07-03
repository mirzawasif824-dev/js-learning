const Heros =  ["thor","ironman","spiderman"]
const dcheros =["superman","batman","Flash"]

// Heros.push(dcheros)

// console.log(Heros);
// console.log(Heros[3][1]);


 const allheros = Heros.concat(dcheros)
// console.log(allheros);


const Another_array = [1, 2, 3, [4, 5, 6], 7, [6 ,7, [4, 5]]]
const Real_Array = Another_array.flat(Infinity)
console.log(Real_Array);
