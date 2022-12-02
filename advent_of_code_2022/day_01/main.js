const fs = require("fs");

const elves = fs.readFileSync("input.txt", { encoding: "utf-8" }) 
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows REALLY IMPORTANT STUFF THIS THING WAS TAKING ME SO LONG TO FIGURE IT OUT
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline

function part1() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  console.log(Math.max(...calories));
}

function part2() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  calories.sort((a, b) => b - a);

  console.log(
    calories.slice(0, 3).reduce((previous, current) => previous + current, 0)
  );
}

part1();
part2();
