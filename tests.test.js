const balancedSums = require("./challenge");

test("Test balaced sum", () => {
  const actualValue = balancedSums([1, -2, 5, 6, 3, 4, 0, 0, -9, -10]);
  expect([0.2.toFixed(6),0.5.toFixed(6),0.3.toFixed(6)]).toEqual(actualValue);
});

test("Test balaced sum", () => {
  const actualValue = balancedSums([1, -2, 5, 6, 3, 4, 0, 0, -9, -10]);
  expect([(0.2).toFixed(6), (0.5).toFixed(6), (0.3).toFixed(6)]).toEqual(
    actualValue
  );
});
