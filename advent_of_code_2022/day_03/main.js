const path = require("path");
const fs = require("fs");
const input = fs
    .readFileSync(path.join(__dirname, "smallInput.txt"), "utf8")
    .replace(/\r/g, "")
    .trim()
    .split("\n");

const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
const upperAlphabet = lowerAlphabet.toUpperCase()

function getPriorities() {
    const lowerPriority = {}
    const upperPriority = {}

    for (let i = 0; i < lowerAlphabet.length; i++) {
        lowerPriority[lowerAlphabet[i]] = i + 1
    }

    for (let i = 0; i < upperAlphabet.length; i++) {
        upperPriority[upperAlphabet[i]] = 27 + i
    }
    return [lowerPriority, upperPriority]
}

function rucksackDivision() {
    const [lower, upper] = getPriorities()
    let total = 0

    input.forEach(rucksack => {
        const firstCompartment = rucksack.slice(rucksack[0], rucksack.length / 2)
        const secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length)
        const hashHelper = {}

        for (let elem of firstCompartment) {
            hashHelper[elem] = elem
        }

        for (let elem of secondCompartment) {
            if (elem.toLowerCase() === hashHelper[elem]) {
                return total += lower[elem]
            }

            if (elem.toUpperCase() === hashHelper[elem]) {
                return total += upper[elem]
            }
        }

    })

    console.log(total)
}

function elvesBadges() {
    const [lower, upper] = getPriorities()

    const priorities = { ...lower, ...upper }

    let sum = 0

    for (let i = 0; i < input.length; i += 3) {
        let item = input[i].split('')
            .filter(letter => input[i + 1]
                .includes(letter) && input[i + 2]
                    .includes(letter))
        sum += priorities[item[0]]
    }

    console.log(sum)
}

rucksackDivision()
elvesBadges()

