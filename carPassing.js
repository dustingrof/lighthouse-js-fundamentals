const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
speed = 55; 

const carPassing = function (cars, speed) {
  let newData = { time: Date.now(), speed: speed };
  cars.push(newData);
  return cars;
}

console.log(carPassing(cars, speed));