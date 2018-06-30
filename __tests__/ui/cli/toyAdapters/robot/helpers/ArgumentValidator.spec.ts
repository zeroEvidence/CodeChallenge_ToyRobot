import { ArgumentValidator } from "../../../../../../src/ui/cli/toyAdapters/robot/helpers/ArgumentValidator";

describe("ArgumentValidator", () => {
  describe("argumentsXYF", () => {
    it("Should validate 0,0,north as true", () => {
      expect(ArgumentValidator.argumentsXYF("0,0,north")).toEqual(true);
    });

    it("Should validate 1,0,NORTH as true", () => {
      expect(ArgumentValidator.argumentsXYF("1,0,NORTH")).toEqual(true);
    });

    it("Should validate 0,1,south as true", () => {
      expect(ArgumentValidator.argumentsXYF("0,1,south")).toEqual(true);
    });

    it("Should validate 1,1,SOUTH as true", () => {
      expect(ArgumentValidator.argumentsXYF("1,1,SOUTH")).toEqual(true);
    });

    it("Should validate 2,0,east as true", () => {
      expect(ArgumentValidator.argumentsXYF("2,0,east")).toEqual(true);
    });

    it("Should validate 0,2,EAST as true", () => {
      expect(ArgumentValidator.argumentsXYF("0,2,EAST")).toEqual(true);
    });

    it("Should validate 3,0,west as true", () => {
      expect(ArgumentValidator.argumentsXYF("3,0,west")).toEqual(true);
    });

    it("Should validate 0,3,WEST as true", () => {
      expect(ArgumentValidator.argumentsXYF("0,3,WEST")).toEqual(true);
    });

    it("Should validate 0,0,foo as false", () => {
      expect(ArgumentValidator.argumentsXYF("0,0,foo")).toEqual(false);
    });

    it("Should validate 0,0,FOO as false", () => {
      expect(ArgumentValidator.argumentsXYF("0,0,FOO")).toEqual(false);
    });

    it("Should validate 0,a,NORTH as true", () => {
      expect(ArgumentValidator.argumentsXYF("0,a,NORTH")).toEqual(false);
    });

    it("Should validate a,0,NORTH as true", () => {
      expect(ArgumentValidator.argumentsXYF("a,0,NORTH")).toEqual(false);
    });
  });
});
