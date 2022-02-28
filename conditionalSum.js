const conditionalSum = function(values, condition) {
  let sum = 0;
  let evenArray = [];
  let oddArray = [];
  for (i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
        evenArray.push(values[i]);
    }
    else {
      oddArray.push(values[i]);
    }
  }
  if (condition === "even") {
    for (let j = 0; j < evenArray.length; j++) {
      sum += evenArray[j];
  } }
  else {
    for (let j = 0; j < oddArray.length; j++) {
      sum += oddArray[j];
  }
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));