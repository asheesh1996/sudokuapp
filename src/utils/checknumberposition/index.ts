import { GRID, NUMBERS, SQUARE } from "../../typings";

interface IInputRow {
  grid: GRID;
  row: number;
  value: NUMBERS;
}
interface IInputCol {
  grid: GRID;
  col: number;
  value: NUMBERS;
}

interface IInPutSquare {
  square: SQUARE;
  value: NUMBERS;
}

function valueInRow({ grid, row, value }: IInputRow): boolean {
  return grid[row].includes(value);
}

function valueInCol({ grid, col, value }: IInputCol): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true;
    }
  }

  return false;
}

function valueInSquare({ square, value }: IInPutSquare): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

const checknumber = {
  valueInCol,
  valueInRow,
  valueInSquare,
};
export default checknumber;

// export { default as valueIsInCol } from "./valueIsInCol";
// export { default as valueIsInRow } from "./valueIsInRow";
