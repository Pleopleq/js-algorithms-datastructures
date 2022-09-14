// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  const width = 2 * nFloors - 1;
  const pyramid = [];

  for (let i = 1; i <= nFloors; i++) {
    let spaces = Math.ceil((width - 2 * i) / 2);
    let floor = `${" ".repeat(spaces)}${"*".repeat(2 * i - 1)}${" ".repeat(
      spaces
    )}`;
    pyramid.push(floor);
  }

  return pyramid;
}
