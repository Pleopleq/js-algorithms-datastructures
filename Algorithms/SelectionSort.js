const numbers = [0, 2, 34, 12, 5, 3, 92];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestVal]) {
        smallestVal = j;
      }
    }
    if (i !== smallestVal) {
      let temp = arr[i];
      arr[i] = arr[smallestVal];
      arr[smallestVal] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(numbers));
