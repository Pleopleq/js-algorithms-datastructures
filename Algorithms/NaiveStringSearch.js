function patternSearch(longString, pattern) {
  let matches = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
        console.log("i:", i,"j:", j)
        console.log(longString[i], pattern[j])
      if (pattern[j] !== longString[i + j]) break;
      if (j === pattern.length - 1) {
        matches++;
      }
    }
  }
  return matches;
}

patternSearch("zowomgzomg", "omg");
