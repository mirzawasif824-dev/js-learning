function lcm(a, b) {
  let bigger = a > b ? a : b;
  let i = bigger;

  while (true) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
    i += bigger;
  }
}

console.log(lcm(8, 10)); 