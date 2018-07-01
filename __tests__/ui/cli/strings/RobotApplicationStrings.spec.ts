import { RobotApplicationStrings } from "../../../../src/ui/cli/strings/RobotApplicationStrings";

describe("RobotApplicationStrings", () => {
  describe("invalidCommand", () => {
    it("Should give back an invalid command message", () => {
      expect(RobotApplicationStrings.invalidCommand(["foo", "bar"])).toEqual(
        "foo bar is not a valid command.\nRun 'help' for more information on commands."
      );
    });
  });

  describe("invalidArgument", () => {
    it("Should give back an invalid argument message", () => {
      expect(RobotApplicationStrings.invalidArgument("foobar")).toEqual(
        "foobar are not valid arguments.\nRun 'help' for more information on commands."
      );
    });
  });
});
