const fs = require("fs");

// const input = fs.readFileSync("./inputs/aoc1.txt", "utf8")

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
//   const parsedInput = parseInputString(input);
//   console.log(parsedInput);
  let output = 0;

  const splitInput = input.split("\n");

  splitInput.forEach((chunk) => {
    let currentFirst = 0;
    let currentLast = 0;

    for (let i = 0; i < chunk.length; i++) {
      const parsedValue = parseInt(chunk[i]);
      if (!isNaN(parsedValue)) {
        if (!currentFirst) {
          currentFirst = parsedValue;
        }

        currentLast = parsedValue;
      }

      if (chunk[i] === "\n" || i === chunk.length - 1) {
        output += parseInt(`${currentFirst}${currentLast}`);
      }
    }
  })

  return output;
}

module.exports = solveAoc1;