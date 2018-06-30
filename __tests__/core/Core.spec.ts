import { Core } from "../../src/core/Core";

describe("Core", () => {
  describe("toyRobotOnFiveByFiveTableCLI", () => {
    it("Should give back an executable object", () => {
      expect((new Core() as any).toyRobotOnFiveByFiveTableCLI()).toHaveProperty(
        "execute"
      );
    });
  });
});
