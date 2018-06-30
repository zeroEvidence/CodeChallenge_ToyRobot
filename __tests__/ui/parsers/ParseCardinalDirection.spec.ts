import { ParseCardinalDirections } from "../../../src/ui/parsers/ParseCardinalDirection";

describe("ParseCardinalDirection", () => {
  describe("numberToString", () => {
    it("Should convert 0 to 'north'", () => {
      expect(ParseCardinalDirections.numberToString(0)).toEqual("north");
    });

    it("Should convert 4 to undefined", () => {
      expect(ParseCardinalDirections.numberToString(4)).toBeUndefined();
    });
  });

  describe("stringToNumber", () => {
    it("Should convert 'north' to 0", () => {
      expect(ParseCardinalDirections.stringToNumber("north")).toEqual(0);
    });

    it("Should convert 'foo' to undefined", () => {
      expect(ParseCardinalDirections.stringToNumber("foo")).toBeUndefined();
    });
  });
});
