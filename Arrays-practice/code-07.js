const array = [1,2,3,4,5,6]
const newarray = [7,8,9,10]
let merged = []

for (let i = 0; i < array.length; i++) {
    merged.push(array[i])     
}
  for(let j = 0 ; j < newarray.length; j++)
     {
        merged.push(newarray[j])
        
    }

console.log(merged);

