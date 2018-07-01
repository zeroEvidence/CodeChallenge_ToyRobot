import { ToyType } from "../../../../src/entities/configs/toyType/ToyType";
import { ApplicationStringsFactory } from "../../../../src/ui/cli/strings/ApplicationStringsFactory";

describe("ApplicationStringsFactory", () => {
  describe("createApplicationStrings", () => {
    it("Should give back an ApplicationStrings object with property 'invalidCommand'", () => {
      expect(
        new ApplicationStringsFactory().createApplicationStrings({
          type: ToyType.StandardRobotV1
        } as any)
      ).toHaveProperty("invalidCommand");
    });

    it("Should give back an ApplicationStrings object with property 'invalidArgument'", () => {
      expect(
        new ApplicationStringsFactory().createApplicationStrings({
          type: ToyType.StandardRobotV1
        } as any)
      ).toHaveProperty("invalidArgument");
    });

    it("Should give back an ApplicationStrings object with property 'delimiter'", () => {
      expect(
        new ApplicationStringsFactory().createApplicationStrings({
          type: ToyType.StandardRobotV1
        } as any)
      ).toHaveProperty("delimiter");
    });

    it("Should give back an ApplicationStrings object with property 'welcomeMessage'", () => {
      expect(
        new ApplicationStringsFactory().createApplicationStrings({
          type: ToyType.StandardRobotV1
        } as any)
      ).toHaveProperty("welcomeMessage");
    });

    it("Should give back an ApplicationStrings object with property 'mainHelp'", () => {
      expect(
        new ApplicationStringsFactory().createApplicationStrings({
          type: ToyType.StandardRobotV1
        } as any)
      ).toHaveProperty("mainHelp");
    });

    it("Should give back an ApplicationStrings object with property 'commandHelp'", () => {
      expect(
        new ApplicationStringsFactory().createApplicationStrings({
          type: ToyType.StandardRobotV1
        } as any)
      ).toHaveProperty("commandHelp");
    });

    it("Should throw an error if it cannot find the related ApplicationStrings", () => {
      const factory = new ApplicationStringsFactory();

      const wrapper = function() {
        factory.createApplicationStrings({
          type: -1
        } as any);
      };

      expect(wrapper).toThrowError(
        "Application strings not found for toy type: -1"
      );
    });
  });
});
