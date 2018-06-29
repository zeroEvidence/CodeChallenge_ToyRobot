/// <reference path="../../../typings/modules/vorpal/index.d.ts" />
import Vorpal = require("vorpal");
import { isString } from "lodash";
import { ISurface } from "../../entities/surface/interfaces/Surface.interface";
import { IOrientation } from "../../entities/toy/orientation/interfaces/Orientation";
import { IPosition } from "../../entities/toy/position/interfaces/Position.interface";
import { IRobot } from "../../entities/toy/robot/interfaces/Robot.interface";
import { ParseCardinalDirections } from "../parsers/ParseCardinalDirection";
import { ParseXYF } from "../parsers/ParseXYF";
import { ApplicationConfig } from "../strings/ApplicationStrings";
import { ArgumentAugmenter } from "./helpers/ArgumentAugmenter";
import { ArgumentValidator } from "./helpers/ArgumentValidator";
import { IToyCommands } from "./interfaces/ToyCommands";
import { ToyCommandsBase } from "./ToyCommandsBase";

export class ToyRobotCommands extends ToyCommandsBase implements IToyCommands {
  constructor(vorpal: Vorpal, toy: IRobot, surface: ISurface) {
    super(vorpal, toy, surface);
  }

  public addCommands() {
    this.placeCommand();
    this.defineHelpCommand("place", ApplicationConfig.CommandHelp.place);
    this.defineHelpCommand("move", ApplicationConfig.CommandHelp.move);
    this.defineHelpCommand("left", ApplicationConfig.CommandHelp.left);
    this.defineHelpCommand("right", ApplicationConfig.CommandHelp.right);
    this.defineHelpCommand("report", ApplicationConfig.CommandHelp.report);
    this.defineNoArgsCommand("move", "move");
    this.defineNoArgsCommand("left", "left");
    this.defineNoArgsCommand("right", "right");
    this.defineNoArgsCommand(
      "report",
      "report",
      (result: IPosition & IOrientation) => {
        this.vorpal.log(
          `${result.x},${result.y},${ParseCardinalDirections.numberToString(
            result.orientation
          ).toUpperCase()}`
        );
      }
    );
  }

  private placeCommand() {
    this.vorpal
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

        this.commandToy(
          "place",
          void 0,
          ParseXYF.toPositionObject(xyf),
          ParseXYF.toOrientationObject(xyf),
          this.surface
        );

        cb();
      });
  }
}
