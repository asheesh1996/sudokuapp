import { GRID, NUMBERS } from "../../../typings";

interface IInputRow {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

function valueIsInRow({ grid, row, value }: IInputRow): boolean {
  return grid[row].includes(value);
}

export default valueIsInRow;
