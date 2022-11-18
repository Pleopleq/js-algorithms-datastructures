
const arrOfStrings = ["ab", "c", "def", "ghij"]

function totalChars(arr) {
    if(arr.length === 0) {
        return 0;
    }

    return arr[0].length + totalChars(arr.slice(1));
}

console.log(totalChars(arrOfStrings))