function triangularNumbers(num) {
    if(num === 1) { return 1 }
    return num + triangularNumbers(num - 1)
}


console.log(triangularNumbers(7))
// triangularNumbers(4)