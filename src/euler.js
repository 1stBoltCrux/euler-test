// Business Logic
export function generateArray() {
  let count = [];
  for (var i = 0; i <= 1000; i++) {
    count.push(i);
  }
  return count;
}

export function findThreeFiveMult(inputArray) {
  let threeFiveMult = [];
  let sumThreeFiveMult = 0;
  inputArray.forEach(function(element) {
    if (element % 3 === 0 || element % 5 === 0) {
      threeFiveMult.push(element);
      sumThreeFiveMult += element;
    }
  });
  return sumThreeFiveMult;
}
