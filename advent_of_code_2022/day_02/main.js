const fs = require("fs")

const valuesLeft = {
    A: 1,
    B: 2,
    C: 3,
}

const valuesRight = {
    X: 1,
    Y: 2,
    Z: 3,
}

function rockPaperScissors() {
    const input = fs.readFileSync("./input.txt", 'utf8') 
    .replace(/\r/g, "")
    .trim()
    .split("\n")

    const formattedScore = input.map(score => {
        return [valuesLeft[score[0]], valuesRight[score[2]]]
    })

    const total = formattedScore.map(pair => {
        if (pair[0] === pair[1]) {
           return 3 + pair[1]
        } else if (pair[1] > pair[0] ) {
           return 6 + pair[1]
        } else {
           return pair[1]
        }
    })

    console.log("Part one:", total.reduce((a,b) => a + b, 0))
}

rockPaperScissors()