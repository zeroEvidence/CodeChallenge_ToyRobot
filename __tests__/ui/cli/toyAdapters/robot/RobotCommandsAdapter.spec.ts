import { RobotApplicationStrings } from "../../../../../src/ui/cli/strings/RobotApplicationStrings";
import { RobotCommandsAdapter } from "../../../../../src/ui/cli/toyAdapters/robot/RobotCommandsAdapter";
import { InfiniteEnvironment } from "../../../../mockObjects/InfiniteEnvironment";
import { MockRobot } from "../../../../mockObjects/MockRobot";
import { MockVorpal } from "../../../../mockObjects/MockVorpal";

describe("RobotCommandsAdapter", () => {
  describe("beforeExec", () => {
    it("Should add the commands to vorpal", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ).beforeExec();

      expect(JSON.parse(JSON.stringify(mockVorpal))).toEqual({
        actionCalled: 10,
        activeCommand: {},
        aliasCalled: 30,
        aliasRecorder: [
          "place",
          "place help",
          "PLACE --help",
          "place --help",
          "help PLACE",
          "help place",
          "move help",
          "MOVE --help",
          "move --help",
          "help MOVE",
          "help move",
          "left help",
          "LEFT --help",
          "left --help",
          "help LEFT",
          "help left",
          "right help",
          "RIGHT --help",
          "right --help",
          "help RIGHT",
          "help right",
          "report help",
          "REPORT --help",
          "report --help",
          "help REPORT",
          "help report",
          "move",
          "left",
          "right",
          "report"
        ],
        allowUnknownOptionsFlagCalled: 1,
        commandCalled: 10,
        commandRecorder: [
          "PLACE <x,y,f>",
          "PLACE help",
          "MOVE help",
          "LEFT help",
          "RIGHT help",
          "REPORT help",
          "MOVE [arguments]",
          "LEFT [arguments]",
          "RIGHT [arguments]",
          "REPORT [arguments]"
        ],
        delimiterCalled: 1,
        delimiterString: "toy-robot$",
        hiddenCalled: 5,
        logCalled: 0,
        logRecorder: [],
        parseCalled: 1,
        validateCalled: 5
      });
    });
  });

  describe("afterExec", () => {
    it("Should add the commands to vorpal", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ).afterExec();

      expect(JSON.parse(JSON.stringify(mockVorpal))).toEqual({
        actionCalled: 0,
        activeCommand: {},
        aliasCalled: 0,
        aliasRecorder: [],
        allowUnknownOptionsFlagCalled: 0,
        commandCalled: 0,
        commandRecorder: [],
        delimiterCalled: 0,
        delimiterString: "",
        hiddenCalled: 0,
        logCalled: 1,
        logRecorder: ["Toy robot is awaiting your commands."],
        parseCalled: 0,
        validateCalled: 0
      });
    });
  });

  describe("parsePlaceArguments", () => {
    it("Should encode negative arguments", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      const adapter = new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ) as any;

      expect(adapter.parsePlaceArguments("foo", "-1,-1,NORTH")).toEqual(
        "foo neg1,neg1,NORTH"
      );
    });

    it("Should run command if arguments are not a string", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      const adapter = new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ) as any;

      expect(adapter.parsePlaceArguments("foo", ["bar"])).toEqual("foo");
    });
  });

  describe("placeValidate", () => {
    it("Should validate arguments", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      const adapter = new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ) as any;

      expect(adapter.placeValidate({ "x,y,f": "0,0,north" })).toEqual(true);
    });

    it("Should return false when given invalidate arguments", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      const adapter = new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ) as any;

      expect(adapter.placeValidate({ "x,y,f": "-1,0,north" })).toEqual(false);
    });

    it("Should log an error when given invalidate arguments", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      const adapter = new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ) as any;

      adapter.placeValidate({ "x,y,f": "-1,0,north" });

      return expect(mockVorpal).toHaveProperty(
        "logRecorder",
        expect.arrayContaining([
          "-1,0,north are not valid arguments.\nRun 'help' for more information on commands."
        ])
      );
    });
  });

  describe("placeAction", () => {
    it("Should call place on Robot", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      const adapter = new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ) as any;

      adapter.placeAction({ "x,y,f": "0,0,north" }, () => {});

      expect(mockRobot).toHaveProperty("placeCalled", 1);
    });
  });

  describe("resultPipe", () => {
    it("Should call place on Robot", () => {
      const mockVorpal = new MockVorpal() as any;
      const mockRobot = new MockRobot() as any;

      const adapter = new RobotCommandsAdapter(
        mockVorpal,
        mockRobot,
        new InfiniteEnvironment(),
        RobotApplicationStrings
      ) as any;

      adapter.resultPipe({ x: 0, y: 0, orientation: 0 });

      expect(mockVorpal).toHaveProperty(
        "logRecorder",
        expect.arrayContaining(["0,0,NORTH"])
      );
    });
  });
});
