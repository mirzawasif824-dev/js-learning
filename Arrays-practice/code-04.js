const array = [1,2,3,4,5,6]
let evencount = 0
let oddcount = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      
        evencount++
    }
    else{
        oddcount++
    }
    
}

console.log("these are even numbers", evencount);
console.log("these are odd numbers", oddcount);
