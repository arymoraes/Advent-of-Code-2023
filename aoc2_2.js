const importAndParse = require("./utils/parseInput");

const aoc2Input = importAndParse("aoc2.txt");

const parseSectionInteger = (cubeSection) => {
  return parseInt(cubeSection.match(/([0-9]+)/)[0]);
};

const calculateGamePower = (game) => {
  const [, gameInformation] = game.split(": ");

  const minCubes = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const gameCubeSections = gameInformation.split("; ");

  gameCubeSections.forEach((section) => {
    const cubeSubSection = section.replaceAll("\r", "").split(", ");

    cubeSubSection.forEach((cube) => {
      Object.keys(minCubes).forEach((key) => {
        if (cube.includes(key)) {
          const value = parseSectionInteger(cube);

          if (value > minCubes[key]) {
            minCubes[key] = value;
          }
        }
      });
    });
  });

  return Object.values(minCubes).reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const solveAoc2 = (input) => {
  return input.reduce((accumulator, currentValue) => {
    return calculateGamePower(currentValue) + accumulator;
  }, 0);
};

console.log(solveAoc2(aoc2Input));
