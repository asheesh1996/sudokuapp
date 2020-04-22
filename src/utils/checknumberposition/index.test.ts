import checknumber from "./index";
import { GRID, SQUARE } from "../../typings";

describe("isInCol", () => {
  it("returns true when value is in grid column", () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 2, 3, 4, 5, 6, 7, 8, 9],
      [3, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 2, 3, 4, 5, 6, 7, 8, 9],
      [5, 2, 3, 4, 5, 6, 7, 8, 9],
      [6, 2, 3, 4, 5, 6, 7, 8, 9],
      [7, 2, 3, 4, 5, 6, 7, 8, 9],
      [8, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 2, 3, 4, 5, 6, 7, 8, 9],
    ];

    expect(checknumber.valueInCol({ col: 0, grid, value: 9 })).toBeTruthy();
    expect(checknumber.valueInCol({ col: 0, grid, value: 1 })).toBeTruthy();
    expect(checknumber.valueInCol({ col: 1, grid, value: 2 })).toBeTruthy();
    expect(checknumber.valueInCol({ col: 8, grid, value: 9 })).toBeTruthy();
  });

  it("returns false when value is not in grid column", () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 2, 3, 4, 5, 6, 7, 8, 9],
      [3, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 2, 3, 4, 5, 6, 7, 8, 9],
      [5, 2, 3, 4, 5, 6, 7, 8, 9],
      [6, 2, 3, 4, 5, 6, 7, 8, 9],
      [7, 2, 3, 4, 5, 6, 7, 8, 9],
      [8, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 2, 3, 4, 5, 6, 7, 8, 9],
    ];

    expect(checknumber.valueInCol({ col: 2, grid, value: 2 })).toBeFalsy();
    expect(checknumber.valueInCol({ col: 1, grid, value: 1 })).toBeFalsy();
    expect(checknumber.valueInCol({ col: 7, grid, value: 9 })).toBeFalsy();
  });
  it("returns true when value is in grid row", () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 2, 3, 4, 5, 6, 7, 8, 9],
      [3, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 2, 3, 4, 5, 6, 7, 8, 9],
      [5, 2, 3, 4, 5, 6, 7, 8, 9],
      [6, 2, 3, 4, 5, 6, 7, 8, 9],
      [7, 2, 3, 4, 5, 6, 7, 8, 9],
      [8, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 2, 3, 4, 5, 6, 7, 8, 9],
    ];

    expect(checknumber.valueInRow({ row: 0, grid, value: 9 })).toBeTruthy();
    expect(checknumber.valueInRow({ row: 0, grid, value: 5 })).toBeTruthy();
    expect(checknumber.valueInRow({ row: 1, grid, value: 2 })).toBeTruthy();
    expect(checknumber.valueInRow({ row: 8, grid, value: 9 })).toBeTruthy();
  });

  it("returns false when value is not in grid row", () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 2, 3, 4, 5, 6, 7, 8, 9],
      [3, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 2, 3, 4, 5, 6, 7, 8, 9],
      [5, 2, 3, 4, 5, 6, 7, 8, 9],
      [6, 2, 3, 4, 5, 6, 7, 8, 9],
      [7, 2, 3, 4, 5, 6, 7, 8, 9],
      [8, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 2, 3, 4, 5, 6, 7, 8, 9],
    ];

    expect(checknumber.valueInRow({ row: 2, grid, value: 1 })).toBeFalsy();
    expect(checknumber.valueInRow({ row: 1, grid, value: 1 })).toBeFalsy();
    expect(checknumber.valueInRow({ row: 7, grid, value: 1 })).toBeFalsy();
  });

  it("returns true when value is in grid square", () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    expect(checknumber.valueInSquare({ square, value: 5 })).toBeTruthy();
    expect(checknumber.valueInSquare({ square, value: 6 })).toBeTruthy();
    expect(checknumber.valueInSquare({ square, value: 2 })).toBeTruthy();
    expect(checknumber.valueInSquare({ square, value: 1 })).toBeTruthy();
  });

  it("returns false when value is not in grid square", () => {
    const square: SQUARE = [
      [4, 5, 3],
      [4, 5, 7],
      [7, 8, 5],
    ];

    expect(checknumber.valueInSquare({ square, value: 9 })).toBeFalsy();
    expect(checknumber.valueInSquare({ square, value: 6 })).toBeFalsy();
    expect(checknumber.valueInSquare({ square, value: 2 })).toBeFalsy();
    expect(checknumber.valueInSquare({ square, value: 1 })).toBeFalsy();
  });
});
