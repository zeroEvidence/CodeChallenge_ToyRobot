/// <reference path="../../../typings/modules/vorpal/index.d.ts" />
import Vorpal = require("vorpal");
import { isEmpty, isString } from "lodash";
import { EntityFactory } from "../../entities/EntityFactory";
import { IOrientation } from "../../entities/toy/orientation/interfaces/Orientation";
import { IPosition } from "../../entities/toy/position/interfaces/Position.interface";
import { ParseCardinalDirections } from "../parsers/ParseCardinalDirection";
import { ParseXYF } from "../parsers/ParseXYF";
import { ApplicationConfig } from "../strings/ApplicationStrings";
import { ArgumentAugmenter } from "./helpers/ArgumentAugmenter";
import { ArgumentValidator } from "./helpers/ArgumentValidator";

const entities = new EntityFactory();
const robot = entities.createStandardRobot();
const table = entities.createFiveByFiveTable();

const vorpal = new Vorpal();

vorpal.help((cmd: string) => {
  return ApplicationConfig.MainHelp;
});

vorpal.catch("[commands...]").action(function(args, cb) {
  this.log(ApplicationConfig.InvalidCommandString(args.commands as string[]));
  cb();
});

vorpal
  .command("PLACE <x,y,f>")
  .allowUnknownOptions()
  .alias("place")
  .parse((command, args: any) => {
    if (!isString(args)) {
      return `${command}`;
    }

    return `${command} ${ArgumentAugmenter.encode(args)}`;
  })
  .validate(args => {
    return ArgumentValidator.argumentsXYF(args["x,y,f"] as string);
  })
  .action((args, cb) => {
    const xyf = ArgumentAugmenter.decode(args["x,y,f"] as string);

    commandRobot(
      robot.place,
      void 0,
      ParseXYF.toPositionObject(xyf),
      ParseXYF.toOrientationObject(xyf),
      table
    );

    cb();
  });

defineHelpCommand("place", ApplicationConfig.CommandHelp.place);
defineHelpCommand("move", ApplicationConfig.CommandHelp.move);
defineHelpCommand("left", ApplicationConfig.CommandHelp.left);
defineHelpCommand("right", ApplicationConfig.CommandHelp.right);
defineHelpCommand("report", ApplicationConfig.CommandHelp.report);
defineNoArgsCommand("move", robot.move);
defineNoArgsCommand("left", robot.left);
defineNoArgsCommand("right", robot.right);
defineNoArgsCommand(
  "report",
  robot.report,
  (result: IPosition & IOrientation) => {
    vorpal.log(
      `${result.x},${result.y},${ParseCardinalDirections.numberToString(
        result.orientation
      ).toUpperCase()}`
    );
  }
);

function defineNoArgsCommand(
  commandName: string,
  robotCmd: (...args: any[]) => any,
  resultPipe?: (result: any) => void
) {
  vorpal
    .command(`${commandName.toUpperCase()} [arguments]`)
    .alias(`${commandName.toLowerCase()}`)
    .validate(args => {
      return noArgumentsAllowed(args);
    })
    .action((args, cb) => {
      commandRobot(robotCmd, resultPipe);
      cb();
    });
}

function noArgumentsAllowed(args: any) {
  if (isEmpty(args.options) && !args.arguments) {
    vorpal.log("executing command");
    return true;
  } else {
    vorpal.log("This command does not take arguments.");
    return false;
  }
}

function commandRobot(
  cmd: (...args: any[]) => any,
  resultPipe?: (result: any) => void,
  ...args: any[]
) {
  try {
    vorpal.log("B");
    const result = cmd.bind(robot)(...args);

    if (resultPipe) {
      resultPipe(result);
    }

    vorpal.log(result);
    return result;
  } catch (e) {
    vorpal.activeCommand.log(e.message);
    return false;
  }
}

function defineHelpCommand(commandName: string, commandHelp: string[]) {
  vorpal
    .command(`${commandName.toUpperCase()} help`)
    .alias(`${commandName.toLowerCase()} help`)
    .alias(`${commandName.toUpperCase()} --help`)
    .alias(`${commandName.toLowerCase()} --help`)
    .alias(`help ${commandName.toUpperCase()}`)
    .alias(`help ${commandName.toLowerCase()}`)
    .action((args, cb) => {
      logStringArray(commandHelp, cb);
    })
    .hidden();
}

function logStringArray(message: string[], cb: () => void) {
  message.forEach(message => vorpal.activeCommand.log(message));
  cb();
}

vorpal.delimiter("toy-robot$").show();

vorpal.log("Toy robot is awaiting your commands.");
