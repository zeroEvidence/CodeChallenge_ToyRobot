import { ToyType } from "../../src/entities/configs/toyType/ToyType";
import { EntityFactory } from "../../src/entities/EntityFactory";

describe("EntityFactory", () => {
  describe("createFiveByFiveTable", () => {
    it("Should create a table with width of 5", () => {
      expect(new EntityFactory().createFiveByFiveTable()).toHaveProperty(
        "width",
        5
      );
    });

    it("Should create a table with length of 5", () => {
      expect(new EntityFactory().createFiveByFiveTable()).toHaveProperty(
        "length",
        5
      );
    });
  });

  describe("createStandardRobot", () => {
    it("Should create a table with width of 5", () => {
      expect(new EntityFactory().createStandardRobot()).toHaveProperty(
        "type",
        ToyType.StandardRobotV1
      );
    });
  });
});
