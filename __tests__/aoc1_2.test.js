const fs = require("fs");

const solveAoc1 = require("../aoc1_2.js")

const mockInput2 = fs.readFileSync("./__tests__/mocks/aoc1_2.txt", "utf8")
console.log(mockInput2)
// const realInput = fs.readFileSync("./inputs/aoc1.txt", "utf8")

test.only('should return the correct value for the mock string', () => {
  expect(solveAoc1(mockInput2)).toBe(281)
});