import { AppCLI } from "../../../src/ui/cli/AppCLI";
import { MockVorpal } from "../../mockObjects/MockVorpal";

describe("AppCLI", () => {
  describe("execute", () => {
    it("Should execute vorpal", () => {
      const mockVorpal = new MockVorpal();
      const appCLI = new AppCLI(
        mockVorpal as any,
        {
          beforeExec: () => {},
          afterExec: () => {}
        },
        {} as any
      ).execute();

      expect(JSON.parse(JSON.stringify(mockVorpal))).toEqual({
        actionCalled: 1,
        activeCommand: {},
        aliasCalled: 0,
        aliasRecorder: [],
        allowUnknownOptionsFlagCalled: 0,
        catchCalled: 1,
        commandCalled: 0,
        commandRecorder: [],
        delimiterCalled: 0,
        delimiterString: "",
        helpCalled: 1,
        hiddenCalled: 0,
        logCalled: 0,
        logRecorder: [],
        parseCalled: 0,
        showCalled: 1,
        validateCalled: 0
      });
    });

    it("Should execute beforeExec", () => {
      const mockVorpal = new MockVorpal();
      const fn = jest.fn();
      const appCLI = new AppCLI(
        mockVorpal as any,
        {
          beforeExec: fn,
          afterExec: fn
        },
        {} as any
      ).execute();

      expect(fn).toBeCalled();
    });

    it("Should execute afterExec", () => {
      const mockVorpal = new MockVorpal();
      const fn = jest.fn();
      const appCLI = new AppCLI(
        mockVorpal as any,
        {
          beforeExec: fn,
          afterExec: fn
        },
        {} as any
      ).execute();

      expect(fn).toBeCalled();
    });
  });
});
