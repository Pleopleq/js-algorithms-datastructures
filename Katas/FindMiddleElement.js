//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

function gimme(triplet) {
  let index = 0;
  let min = Math.min(...triplet);
  let max = Math.max(...triplet);
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] !== min && triplet[i] !== max) {
      index = i;
    }
  }
  return index;
}
