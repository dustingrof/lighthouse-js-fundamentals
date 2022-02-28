const sumLargestNumbers = function(data) {
  let largestValueA = 0;
  let largestValueB = 0;
  let sumArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestValueA) {
      largestValueA = data[i];
      sumArray[0] = largestValueA;
    }
  }
  for (let j = 0; j < data.length; j++) {
    if (data[j] > largestValueB && data[j] < sumArray[0]) {
      largestValueB = data[j];
      sumArray[1] = largestValueB;
    }
  } 
  return sumArray[0] + sumArray[1];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));