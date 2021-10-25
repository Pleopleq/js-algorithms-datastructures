function merge(arr1, arr2) {
  let mergedArr = [];
  let currentValueatOne = 0;
  let currentValueatTwo = 0;
  while (currentValueatOne < arr1.length && currentValueatTwo < arr2.length) {
    if (arr2[currentValueatTwo] > arr1[currentValueatOne]) {
      mergedArr.push(arr1[currentValueatOne]);
      currentValueatOne++;
    } else {
      mergedArr.push(arr2[currentValueatTwo]);
      currentValueatTwo++;
    }
  }

  while (currentValueatOne < arr1.length) {
    mergedArr.push(arr1[currentValueatOne]);
    currentValueatOne++;
  }

  while (currentValueatTwo < arr2.length) {
    mergedArr.push(arr2[currentValueatTwo]);
    currentValueatTwo++;
  }

  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 3, 5, 10, 99, 100, 9, 18, 2, 4, 6, 11]));
