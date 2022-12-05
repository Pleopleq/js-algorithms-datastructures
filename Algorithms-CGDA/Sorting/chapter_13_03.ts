const intArr = [1,6,8,14,23,52,52,56,5,7,9, 58,12,43]

// O(N^2) Implementation
function greatestNumber(array: Array<number>) {
    let greatestNum = 0

    for (let i = 0; i < array.length; i++) {
        greatestNum = array[i]

        for (let j = 1; j < array.length; j++) {
            if (greatestNum < array[j]) {
                greatestNum = array[j]
            }
        }
    }

    return greatestNum
}

console.log("O(N^2) Implementation: ", greatestNumber(intArr))

//O(N log N) Implementation

function greatestNumberLog(array: Array<number>) {
    const sortedArray = array.sort((a, b) => a - b)

    return sortedArray[sortedArray.length - 1]
}

console.log("O(N log N) Implementation: ", greatestNumberLog(intArr))


//O(N) Implementation

function greatestNumberLinear(array: Array<number>) {
    let greatestSoFar = array[0]

    for (let i = 0; i < array.length; i++) {
        if(array[i] > greatestSoFar) {
            greatestSoFar = array[i]
        }
    }

    return greatestSoFar
}

console.log("O(N) Implementation: ", greatestNumberLinear(intArr))
