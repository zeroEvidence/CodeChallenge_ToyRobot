import { TestConst } from "../src";

describe("index", () => {
  it("Should produce a failing test", () => {
    return expect(TestConst).toEqual(false);
  });

  it("Should produce a passing test", () => {
    return expect(TestConst).toEqual(true);
  });
});
