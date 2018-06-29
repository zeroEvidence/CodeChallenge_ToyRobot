/// <reference path="../../../typings/modules/vorpal/index.d.ts" />
import Vorpal = require("vorpal");
import { isEmpty, isUndefined } from "lodash";
import { EntityFactory } from "../../entities/EntityFactory";
import { CardinalDirections } from "../../entities/toy/robot/behaviours/orientation/CardinalDirections";

const entities = new EntityFactory();
const robot = entities.createStandardRobot();
const table = entities.createFiveByFiveTable();

const vorpal = new Vorpal();

vorpal.help((cmd: string) => {
  return (
    "  Commands:\n\n" +
    "    help [command...]  Provides help for a given command.\n" +
    "    exit               Exits application.\n" +
    "    PLACE <x,y,f>      Place the robot at x,y,f.\n" +
    "    MOVE               Move the robot one unit in the direction it is facing.\n" +
    "    LEFT               Rotates the robot 90 degrees left.\n" +
    "    RIGHT              Rotates the robot 90 degrees right.\n" +
    "    REPORT             Report the current position and orientation in the form of x,y,f.\n"
  );
});

vorpal
  .catch("[commands...]", "Catches incorrect commands")
  .action(function(args, cb) {
    this.log(
      (args.commands as string[]).join(" ") + " is not a valid command."
    );
    cb();
  });

vorpal
  .command("PLACE <x,y,f>")
  .allowUnknownOptions()
  .alias("place")
  .parse((command, args: any) => {
    args = (args as string).replace("-", "neg");
    return `${command} ${args}`;
  })
  .validate(args => {
    return /(?:neg)?\d,(?:neg)?\d,\w/.test(args["x,y,f"] as string);
  })
  .action((args, cb) => {
    args["x,y,f"] = (args["x,y,f"] as string).replace("neg", "-");
    const split = (x: string) => x.split(",");
    const makeObject = ([x, y, orientation]: string[]) => {
      const cardinal =
        CardinalDirections[
          orientation.toLowerCase() as keyof typeof CardinalDirections
        ];

      return {
        position: {
          x: +x,
          y: +y
        },
        direction: {
          orientation: isUndefined(cardinal) ? -1 : cardinal
        }
      };
    };
    const coords = makeObject(split(args["x,y,f"] as string));

    commandRobot(robot.place, coords.position, coords.direction, table);
    cb();
  });

vorpal
  .command("MOVE [arguments]")
  .alias("move")
  .validate(args => {
    return noArgumentsAllowed(args);
  })
  .action((args, cb) => {
    commandRobot(robot.move);
    cb();
  });

vorpal
  .command("LEFT [arguments]")
  .alias("left")
  .validate(args => {
    return noArgumentsAllowed(args);
  })
  .action((args, cb) => {
    commandRobot(robot.left);
    cb();
  });

vorpal
  .command("RIGHT")
  .alias("right")
  .validate(args => {
    return noArgumentsAllowed(args);
  })
  .action((args, cb) => {
    commandRobot(robot.right);
    cb();
  });

vorpal
  .command("REPORT")
  .alias("report")
  .validate(args => {
    return noArgumentsAllowed(args);
  })
  .action((args, cb) => {
    commandRobot(robot.report);
    cb();
  });

function noArgumentsAllowed(args: any) {
  vorpal.log(JSON.stringify(args, null, "  "));
  if (isEmpty(args.options) && !args.arguments) {
    return true;
  } else {
    vorpal.log("This command does not take arguments.");
    return false;
  }
}

function commandRobot(cmd: (...args: any[]) => any, ...args: any[]) {
  try {
    cmd.bind(robot)(...args);
    return true;
  } catch (e) {
    vorpal.activeCommand.log(e.message);
    return false;
  }
}

function placeHelp(cb: () => void) {
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Usage:  PLACE x,y,f");
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Place the robot at x,y,f.");
  vorpal.activeCommand.log(
    "Where x and y are numbers and f is 'NORTH', 'SOUTH', 'EAST', or 'WEST'."
  );
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Example:");
  vorpal.activeCommand.log("PLACE 1,1,NORTH");
  vorpal.activeCommand.log("");

  cb();
}

function moveHelp(cb: () => void) {
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Usage:  MOVE");
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log(
    "Move one unit in the direction the robot is facing."
  );
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Example:");
  vorpal.activeCommand.log("MOVE");
  vorpal.activeCommand.log("");

  cb();
}

function leftHelp(cb: () => void) {
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Usage:  LEFT");
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Rotates the robot 90 degrees left");
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Example:");
  vorpal.activeCommand.log("LEFT");
  vorpal.activeCommand.log("");

  cb();
}

function rightHelp(cb: () => void) {
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Usage:  RIGHT");
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Rotates the robot 90 degrees right");
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Example:");
  vorpal.activeCommand.log("RIGHT");
  vorpal.activeCommand.log("");

  cb();
}

function reportHelp(cb: () => void) {
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Usage:  REPORT");
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log(
    "Report the current position and orientation in the form of x,y,f"
  );
  vorpal.activeCommand.log(
    "Where x and y are numbers and f is 'NORTH', 'SOUTH', 'EAST', or 'WEST'."
  );
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Example:");
  vorpal.activeCommand.log("REPORT");
  vorpal.activeCommand.log("");
  vorpal.activeCommand.log("Output:");
  vorpal.activeCommand.log("0,0,NORTH");
  vorpal.activeCommand.log("");

  cb();
}

vorpal
  .command("PLACE help")
  .alias("place help")
  .alias("PLACE --help")
  .alias("place --help")
  .alias("help PLACE")
  .alias("help place")
  .action((args, cb) => {
    placeHelp(cb);
  })
  .hidden();

vorpal
  .command("MOVE help")
  .alias("move help")
  .alias("MOVE --help")
  .alias("move --help")
  .alias("help MOVE")
  .alias("help move")
  .action((args, cb) => {
    moveHelp(cb);
  })
  .hidden();

vorpal
  .command("LEFT help")
  .alias("left help")
  .alias("LEFT --help")
  .alias("left --help")
  .alias("help LEFT")
  .alias("help left")
  .action((args, cb) => {
    leftHelp(cb);
  })
  .hidden();

vorpal
  .command("RIGHT help")
  .alias("right help")
  .alias("RIGHT --help")
  .alias("right --help")
  .alias("help RIGHT")
  .alias("help right")
  .action((args, cb) => {
    rightHelp(cb);
  })
  .hidden();

vorpal
  .command("REPORT help")
  .alias("report help")
  .alias("REPORT --help")
  .alias("report --help")
  .alias("help REPORT")
  .alias("help report")
  .action((args, cb) => {
    reportHelp(cb);
  })
  .hidden();

vorpal.delimiter("toy-robot$").show();

vorpal.log("Toy robot is awaiting your commands.");
