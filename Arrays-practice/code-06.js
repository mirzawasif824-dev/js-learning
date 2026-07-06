const array = [1,2,3,3,4,5,5,6]
const newarray = []

for (let i = 0; i < array.length; i++) {
    if (!newarray.includes(array[i])) {
      
        newarray.push(array[i])
    }
    
}

console.log(newarray);
