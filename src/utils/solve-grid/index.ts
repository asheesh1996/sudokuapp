import global from "../../global";
import { GRID, NUMBERS } from "../../typings";
import { checkGrid, identifySquare, checknumber } from "../../utils";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function to check all possible combinations of numbers until a solution is found
 * @param grid A 9X9 array consisting of values from 0-9)
 */
function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value of numbers)
        if (!checknumber.valueInRow({ grid, row, value }))
          if (!checknumber.valueInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row });
            if (!checknumber.valueInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) {
                global.counter++;
                break;
              } else if (solveGrid(grid)) return true;
            }
          }
      break;
    }
  }

  grid[row][col] = 0;
}
export default solveGrid;
