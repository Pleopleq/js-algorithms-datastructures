function insertionSort(arr: Array<number>) {
  for (let i = 1; i < arr.length; i++) {
    let temp_val = arr[i];
    let position = i - 1;

    while (position >= 0) {
      if (arr[position] > temp_val) {
        arr[position + 1] = arr[position];
        position = position - 1;
      } else {
        break;
      }
    }

    arr[position + 1] = temp_val;
  }

  return arr;
}

console.log(insertionSort([7, 1, 5, 2, 8, 3, 4, 9]));
