import shuffle from "./";

describe("shuffle", () => {
  it("returns same length array and elements", () => {
    const array = [1, 2, 3];
    shuffle(array);
    expect(array).toHaveLength(3);
    expect(array).toContain(2);
    expect(array).toContain(3);
    expect(array).toContain(1);
  });
});
