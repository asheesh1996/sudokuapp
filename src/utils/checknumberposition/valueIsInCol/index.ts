import { GRID, NUMBERS } from "../../../typings";

interface IInputCol {
  grid: GRID;
  col: number;
  value: NUMBERS;
}

function valueIsInCol({ grid, col, value }: IInputCol): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true;
    }
  }

  return false;
}
export default valueIsInCol;
