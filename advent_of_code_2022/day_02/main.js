const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n")

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

function calculateFirstPart() {
    let score = 0

    const formattedScore = input.map(score => {
        return [valuesLeft[score[0]], valuesRight[score[2]]]
    })

    formattedScore.forEach(pair => {
        if (pair[1] === valuesRight.X) {
            score += valuesRight.X;

            if (pair[0] === valuesLeft.A) {score += 3;}
            if (pair[0] === valuesLeft.C) {score += 6;}
        }

        if (pair[1] === valuesRight.Y) {
            score += valuesRight.Y;

            if (pair[0] === valuesLeft.B) {score += 3;}
            if (pair[0] ===valuesLeft.A){ score += 6;}
        }

        if (pair[1] === valuesRight.Z) {
            score += valuesRight.Z;

            if (pair[0] === valuesLeft.C) {score += 3;}
            if (pair[0] === valuesLeft.B) {score += 6;}
        } 
    })

    return score
}

function calculateSecondPart () {
    let score = 0

    const formattedScore = input.map(score => {
        return [score[0], score[2]]
    })

    formattedScore.forEach(pair => {
        if (pair[1] === "X") {
            if (pair[0] === "A") {score += 3;}
            if (pair[0] === "B") {score += 1;}
            if (pair[0] === "C") {score += 2;}
        }

        if (pair[1] === "Y") {
            score += 3;
            if (pair[0] === "A") {score += 1;}
            if (pair[0] === "B") {score += 2;}
            if (pair[0] === "C") {score += 3;}
        } 

        if (pair[1] === "Z") {
            score += 6
            if (pair[0] === "A") {score += 2;}
            if (pair[0] === "B") {score += 3;}
            if (pair[0] === "C") {score += 1;}
        }
    })
    
    return score
}

function rockPaperScissors() {
    let scorePartOne = calculateFirstPart()
    let scorePartTwo = calculateSecondPart()
    
    console.log("Part one:", scorePartOne)
    console.log("Part two:", scorePartTwo)
}

rockPaperScissors()