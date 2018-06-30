import { InfiniteEnvironment } from "../../../mockObjects/InfiniteEnvironment";
import { MockRobot } from "../../../mockObjects/Robot";
import { MockVorpal } from "../../../mockObjects/Vorpal";
import { TestToyCommandBase } from "./TestToyCommandBase";

describe("ToyCommandsAdapterBase", () => {
  describe("noArgumentsAllowed", () => {
    it("Should return true when not given arguments", () => {
      const mockVorpal = new MockVorpal();
      const mockRobot = new MockRobot();

      const commandBase = new TestToyCommandBase(
        mockVorpal as any,
        mockRobot as any,
        new InfiniteEnvironment()
      );

      expect(commandBase.noArgumentsAllowed({})).toEqual(true);
    });

    it("Should return false when given arguments", () => {
      const mockVorpal = new MockVorpal();
      const mockRobot = new MockRobot();

      const commandBase = new TestToyCommandBase(
        mockVorpal as any,
        mockRobot as any,
        new InfiniteEnvironment()
      );

      expect(commandBase.noArgumentsAllowed({ arguments: "foo" })).toEqual(
        false
      );
    });
  });

  describe("commandToy", () => {
    it("Should pipe the result if a resultPipe is given", () => {
      const mockVorpal = new MockVorpal();
      const mockRobot = new MockRobot();

      const commandBase = new TestToyCommandBase(
        mockVorpal as any,
        mockRobot as any,
        new InfiniteEnvironment()
      );

      const cb = jest.fn();

      commandBase.commandToy(void 0, () => {}, "place", cb);

      expect(cb).toHaveBeenCalled();
    });

    it("Should log an error if method name doesn't exist on toy", () => {
      const mockVorpal = new MockVorpal();
      const mockRobot = new MockRobot();

      const commandBase = new TestToyCommandBase(
        mockVorpal as any,
        mockRobot as any,
        new InfiniteEnvironment()
      );

      commandBase.commandToy(void 0, () => {}, "foo", () => {});

      expect(mockVorpal).toHaveProperty("logRecorder", [
        "Method 'foo' does not exist on toy."
      ]);
    });
  });

  describe("logStringArray", () => {
    it("Should ", () => {
      const mockVorpal = new MockVorpal();
      const mockRobot = new MockRobot();

      const commandBase = new TestToyCommandBase(
        mockVorpal as any,
        mockRobot as any,
        new InfiniteEnvironment()
      );

      commandBase.logStringArray(["foo", "bar"], () => {});

      expect(mockVorpal).toHaveProperty("logRecorder", ["foo", "bar"]);
    });
  });
});
