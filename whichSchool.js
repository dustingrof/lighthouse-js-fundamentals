const whichSchool  = function (age) {
  //create if statement for different ages
  if (age < 13) {
    return "Elementary School";
  }
  else if (age > 18) {
    return "Lighthouse Labs";
  }  
  else if (age => 13 && 18 <= age) {
    return "Secondary School";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));