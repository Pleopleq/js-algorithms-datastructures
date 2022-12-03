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
        upperPriority[upperAlphabet[i]] = i + 1
    }
    return [lowerPriority, upperPriority]
}

function rucksackDivision() {
    return input.map(rucksack => {
        const firstCompartment = rucksack.slice(rucksack[0], rucksack.length / 2)
        const secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length)
        return `${firstCompartment},${secondCompartment}`
    })
}

// MAIN

function rucksackReorganization() {
    const rucksackComparments = rucksackDivision()
    const [lower, upper] = getPriorities()

    console.log(lower, upper)
    return rucksackComparments
}

console.log(rucksackReorganization())


