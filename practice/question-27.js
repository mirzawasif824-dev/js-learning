function swapTwoVariables(a, b) {
  
  let temp = a;

 
  a = b;

  
  b = temp;

  return [a, b];
}

let x = 5;
let y = 10;

let result = swapTwoVariables(x, y);
console.log(result);