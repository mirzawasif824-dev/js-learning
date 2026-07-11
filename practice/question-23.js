function gcd(a, b) {
  let result = 1;


  let smaller = a < b ? a : b;

  for (let i = 1; i <= smaller; i++) {

    if (a % i === 0 && b % i === 0) {
      result = i; 
    }
  }

  return result;
}

console.log(gcd(48, 18)); 