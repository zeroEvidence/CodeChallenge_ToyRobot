import { ParseXYF } from "../../../src/ui/parsers/ParseXYF";

describe("ParseXYF", () => {
  describe("toPositionObject", () => {
    it("Should convert 1,1,north to { x: 1, y: 1 }", () => {
      expect(ParseXYF.toPositionObject("1,1,north")).toEqual({ x: 1, y: 1 });
    });
  });

  describe("toOrientationObject", () => {
    it("Should convert 1,1,north to {orientation: 0}", () => {
      expect(ParseXYF.toOrientationObject("1,1,north")).toEqual({
        orientation: 0
      });
    });
  });
});
