const fs = require("fs");

const input = fs.readFileSync("./inputs/aoc1.txt", "utf8")
// 2eightwo5three7abc

// [2, eightwo, 5, three, 7, abc]

const values = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
];


const parseChunk = (chunk) => {
  let newChunk = chunk
  for (let i=0;i<chunk.length;i++) {
    if (chunk[i].match(/[0-9]/)) {
      newChunk = newChunk.replace(chunk[i], `**${chunk[i]}**`)
    }
  }
  
  return newChunk.split("**").filter((e) => e !== "")
}

const getAllSubstrings = (str) => {
  var i, j, result = [];

  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
          result.push(str.slice(i, j));
      }
  }
  return result;
}

const allSubstringsToNumbers = (allSubstrs) => {
  let output = ""

  allSubstrs.forEach((substr) => {
    values.forEach((value) => {
      if (substr === value[0]) {
        output += value[1]
      }
    })
  })

  return output;
}

const takeMinAndMaxFromChunk = (parsedChunk) => {
  let minNumber;
  let maxNumber;

  parsedChunk.forEach((chunk) => {
    const allSubstringsFromChunk = getAllSubstrings(chunk)
    let parsedAllSubstrs = chunk
    if (isNaN(chunk)) {
      parsedAllSubstrs = allSubstringsToNumbers(allSubstringsFromChunk)
    }
  
    parsedAllSubstrs.split("").forEach((itMightHaveMoreThanOne) => {
      const isValidInteger = !isNaN(parseInt(itMightHaveMoreThanOne))
      if (!minNumber && isValidInteger) {
        minNumber = parseInt(itMightHaveMoreThanOne)
      }
  
      if (isValidInteger) {
        maxNumber = parseInt(itMightHaveMoreThanOne)
      }
    })
  })

  return [minNumber, maxNumber]
}

/**
 * Processes a calibration document to recover specific calibration values.
 * Each line of the document contains a calibration value, which is determined
 * by combining the first digit and the last digit in the line to form a
 * two-digit number. This function calculates the sum of all these calibration
 * values in the document.
 *
 * Example:
 * - Input lines: ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]
 * - Output: The sum of calibration values (12 + 38 + 15 + 77 = 142)
 *
 * @param {string} lines - A string, each representing a line in the calibration document.
 * @return {number} The sum of all the calibration values in the document.
 */
const solveAoc1 = (input) => {
  let output = 0;

  const splitInput = input.split("\n");

  splitInput.forEach((chunk) => {
    const parsedChunk = parseChunk(chunk)

    const minMax = takeMinAndMaxFromChunk(parsedChunk)
    console.log({minMax})

    output += parseInt(`${minMax[0]}${minMax[1]}`)
  })

  return output;
};

console.log(solveAoc1(input))

module.exports = solveAoc1;
