const positiveInts = [2,5,32,12,54,9,7];

function greatestProduct(arr) {
    const greatestNumbers = arr.sort((a,b) => a - b)
        .splice(arr.length - 3, arr.length)

    return greatestNumbers.reduce((a, b) => a * b)
}

console.log(greatestProduct(positiveInts))