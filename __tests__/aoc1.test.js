const fs = require("fs");

const solveAoc1 = require("../aoc1.js")

const mockInput = fs.readFileSync("./__tests__/mocks/aoc1.txt", "utf8")
const realInput = fs.readFileSync("./inputs/aoc1.txt", "utf8")

test('should return the correct value for the mock string', () => {
  expect(solveAoc1(mockInput)).toBe(344)
  expect(solveAoc1(realInput)).toBe(53334)
});