import { getUniqueValues } from "./helpers";

it("returns a set out of an array", () => {
  const repeatedArray = [1, 2, 2, 2];
  expect(getUniqueValues(repeatedArray)).toEqual([1, 2]);
});

it("works regardless of position and amount of items", () => {
  const repeatedArray = [1, 2, 2, 2, 4, 4, 2, 3, 3, 3, 1];
  expect(getUniqueValues(repeatedArray)).toEqual([1, 2, 4, 3]);
});
