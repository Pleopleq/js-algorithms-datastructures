function evenNumbers(arr) {
    if(arr.length === 0) { return [] }
    if(arr[0] % 2 === 0) {
        return [arr[0]].concat(evenNumbers(arr.slice(1))) 
    } else {
        return evenNumbers(arr.slice(1))
    }
}

const exampleArray = [1,2,3,4,5,6,7,8,9]

console.log(evenNumbers(exampleArray))