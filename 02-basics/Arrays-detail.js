// Array 

const myarray = [30, 43, 32, 87, 90]
const names =["mirza","wasif","Usman","Mubeen","abdullah"]
const myarray2 = new Array(1,2,3,4,5)

console.log(myarray[3]);
console.log(names[0]);
console.log(myarray2[1]);

//Arrays methodes
myarray.push(6)
myarray.push(7)
myarray.pop()

myarray.unshift(10)
myarray.shift()

console.log(myarray.indexOf(54));

const newarray = myarray2.join()

console.log(myarray);
console.log(typeof newarray);

//slics oe splics

console.log(myarray);

console.log("A", myarray);


const myn1 = myarray.slice(1,3)
console.log(myn1);
console.log("b", myarray);


const myn2 = myarray.splice(1,3)
console.log("c", myarray);
console.log(myn2);