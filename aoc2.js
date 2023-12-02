const importAndParse = require("./utils/parseInput");

const aoc2Input = importAndParse("aoc2.txt");

const totalCubs = {
  red: 12,
  green: 13,
  blue: 14,
};

const solveAoc2 = (input) => {
  let output = 0;

  input.forEach((item) => {
    const [gameNumber, game] = item.split(": ");

    let possibleGame = true;

    const parsedGameNumber = parseInt(gameNumber.match(/([0-9]+)/)[0]);

    const gameCubeSections = game.split("; ");

    gameCubeSections.forEach((section) => {
      const cubeSubSection = section.replaceAll("\r", "").split(", ");

      cubeSubSection.forEach((cube) => {
        if (cube.includes("red")) {
          const integer = parseInt(cube.match(/([0-9]+)/)[0]);

          if (integer > totalCubs.red) {
            possibleGame = false;
          }
        }
        if (cube.includes("green")) {
          const integer = parseInt(cube.match(/([0-9]+)/)[0]);

          if (integer > totalCubs.green) {
            possibleGame = false;
          }
        }
        if (cube.includes("blue")) {
          const integer = parseInt(cube.match(/([0-9]+)/)[0]);

          if (integer > totalCubs.blue) {
            possibleGame = false;
          }
        }
      });
    });

    if (possibleGame) {
      output += parsedGameNumber;
    }
  });

  return output;
};

solveAoc2(aoc2Input);
