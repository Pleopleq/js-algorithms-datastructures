const intArr = [5,2,4,1,0]
const intArrTwo = [9,7,6,5,4,3,2,1,0]
const intArrThree = [1,2,3,4,5,6,7,0]

function findMissingNumber(array: Array<number>) {
    const sortedArray = array.sort((a, b) => a - b)

    for (let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i] !== i) {
            return i;
        }
    }

    return null
}

console.log(findMissingNumber(intArr)) // 3
console.log(findMissingNumber(intArrTwo)) // 8
console.log(findMissingNumber(intArrThree)) // null
