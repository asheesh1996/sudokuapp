import { GRID, NUMBERS } from "../../typings";
import { shuffle, checknumber, identifySquare, checkGrid } from "../../utils";
const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking recursive function
 * @param grid
 */

function FillGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      shuffle(numbers);

      for (let value of numbers) {
        if (!checknumber.valueInRow({ grid, row, value })) {
          if (!checknumber.valueInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row });
            if (!checknumber.valueInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) {
                return true;
              } else if (FillGrid(grid)) {
                return true;
              }
            }
          }
        }
      }
      break;
    }
  }

  grid[row][col] = 0;
}

export default FillGrid;
