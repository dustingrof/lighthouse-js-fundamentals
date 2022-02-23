function howManyHundreds (number) {
  if (number % 100 === 0) {
    cases = number/100;
  } 
  else {
    cases = number/100;
    cases = Math.floor(cases);
  }
  return cases;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);