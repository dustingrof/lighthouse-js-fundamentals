const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness';

const judgeVegetable = function(vegetables, metric) {
  vegetables.sort((a, b) => Number(b[metric]) - Number(a[metric]));{
    return (vegetables[0].submitter);
  }
}

/*const judgeVegetable = function(vegetables, metric) {
  let findHighest = [];
  for (let row = 0; row > vegetables.length; row++) {
    for  (let column = 0; column > vegetables[row].length; column++){
      if (metric === vegetables[column]) {
      return findHighest.push(vegetables[column]);
      }
    }
    return findHighest;
  }
  let winner = Math.max(...findHighest);
  return vegetables[winner].submitter;
}*/

/*const judgeVegetable = function(vegetables, metric) {
  let findHighest = [];
  let submitter = "";
  for (let veggie of vegetables) {
    findHighest.push(veggie[metric])
    if (veggie[metric] === Math.max(findHighest)) {
      submitter = veggie["submitter"]
    }
    
  } return submitter
}
*/

console.log(judgeVegetable(vegetables, metric));
