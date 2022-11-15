function twoArrayIntersection(arrOne, arrTwo) {
    const hashHelper = {};
    const arrIntersection = [];

    if (arrOne.length === 0 || arrTwo.length === 0) {
        return "Please provide two arrays with numbers";
    }

    for (let elem of arrOne) {
        hashHelper[elem] = true;
    }

    for (let elem of arrTwo) {
        hashHelper[elem] && arrIntersection.push(elem);
    }

    return arrIntersection;
}

console.log(twoArrayIntersection([1, 2, 3, 4, 5, 6, 7], [8, 9, 1, 5, 6, 7]));
