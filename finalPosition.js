const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

//begin writing my function
function finalPosition(moves) {
  let coordinateX = 0;
  let coordinateY = 0;
  for (const move of moves) {
    switch (move) {
    case 'north': 
      coordinateY += 1;
      break;
    case 'south': 
      coordinateY += -1;
      break;
    case 'east': 
      coordinateX += 1;
      break;
    case 'west': 
      coordinateX += -1;
      break;
    }
    
  } return coordinates = [coordinateX, coordinateY]
}
console.log(finalPosition(moves));