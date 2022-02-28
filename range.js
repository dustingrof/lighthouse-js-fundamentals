function range(start, end, step) {
  let some_array = [];
  if ((step <= 0) || (start > end) || (start === undefined) || (end === undefined) || (step === undefined)) {
    return [];
  }
    for (let i = start; i <= end; i += step) {
      some_array.push(i);
    } return some_array;
}




console.log(range(0, 10));
console.log(range(40, 30, 5));
console.log(range(-5, 2, 0));

//this should work, commented on the forum to see what people think. 

if (step !== 0 || start < end || start !== undefined || end !== undefined || step !== undefined) {
  for (let i = start; i <= end; i += step) {
    some_array.push(i);
  } return some_array
}
else {
  return [];
}