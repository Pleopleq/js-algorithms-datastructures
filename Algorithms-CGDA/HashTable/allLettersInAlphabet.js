function allLettersInAlphabet(str) {
    const strToArr = []
    const alphabet = {
        'a': false, 'b': false, 'c': false, 'd': false, 'e': false, 'f': false, 'g': false, 'h': false, 'i': false, 'j': false, 'k': false, 'l': false, 'm': false, 'n': false, 'o': false, 'p': false, 'q': false, 'r': false, 's': false, 't': false, 'u': false, 'v': false, 'w': false, 'x': false, 'y': false, 'z': false
    }

    for(let elem of str) {
        if(elem !== " ") {        
            strToArr.push(elem) 
        }
    }

    for (let elem of strToArr) {
        alphabet[elem] = true
    }

    for (const key in alphabet) {
        if(!alphabet[key]) { return key }
    }

    return undefined;
}


console.log(allLettersInAlphabet("the quick brown box jumps over a lazy dog"))