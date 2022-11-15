function nonDuplicateCharacters(str) {
    const strToArr = []
    const duplicated = []
    const hashHelper = {}

    for(let elem of str) {
        strToArr.push(elem)
    }

    for(let elem of strToArr) {
        if(hashHelper[elem]) {
            hashHelper[elem]++
        } else {
            hashHelper[elem] = 1
        }
    }

    for(let elem of strToArr) {
        if (hashHelper[elem] === 1) {
            duplicated.push(elem)
        }
    }

    return duplicated
}

console.log(nonDuplicateCharacters("awasddff"))