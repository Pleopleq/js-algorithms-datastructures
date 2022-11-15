function duplicateArray(arr) {
    const hashHelper = {};

    for(let elem of arr) {
        if(hashHelper[elem]) { return elem }

        hashHelper[elem] = true;
    }

    return undefined;
}

console.log(duplicateArray(["a", "b", "c", "d", "w", "w"]))
