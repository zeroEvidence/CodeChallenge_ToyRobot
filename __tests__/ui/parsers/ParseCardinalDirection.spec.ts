import { ParseCardinalDirection } from "../../../src/ui/parsers/ParseCardinalDirection";

describe("ParseCardinalDirection", () => {
  describe("numberToString", () => {
    it("Should convert 0 to 'north'", () => {
      expect(ParseCardinalDirection.numberToString(0)).toEqual("north");
    });

    it("Should convert 4 to undefined", () => {
      expect(ParseCardinalDirection.numberToString(4)).toBeUndefined();
    });
  });

  describe("stringToNumber", () => {
    it("Should convert 'north' to 0", () => {
      expect(ParseCardinalDirection.stringToNumber("north")).toEqual(0);
    });

    it("Should convert 'foo' to undefined", () => {
      expect(ParseCardinalDirection.stringToNumber("foo")).toBeUndefined();
    });
  });
});
