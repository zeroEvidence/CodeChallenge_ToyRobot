/* tslint:disable:ordered-imports */
import Vorpal = require("vorpal");
import { isString } from "lodash";
import { ISurface } from "../../../../entities/surface/interfaces/Surface.interface";
import { IOrientation } from "../../../../entities/toy/orientation/interfaces/Orientation";
import { IPosition } from "../../../../entities/toy/position/interfaces/Position.interface";
import { IRobot } from "../../../../entities/toy/robot/interfaces/Robot.interface";
import { ParseCardinalDirection } from "../../../parsers/ParseCardinalDirection";
import { ParseXYF } from "../../../parsers/ParseXYF";
import { ArgumentAugmenter } from "../../helpers/ArgumentAugmenter";
import { IApplicationStrings } from "../../strings/interfaces/ApplicationStrings.interface";
import { IToyCommandsAdapter } from "../interfaces/ToyCommandsAdapter";
import { ToyCommandsBase } from "../ToyCommandsAdapterBase";
import { ArgumentValidator } from "./helpers/ArgumentValidator";

export class RobotCommandsAdapter extends ToyCommandsBase
  implements IToyCommandsAdapter {
  constructor(
    vorpal: Vorpal,
    toy: IRobot,
    surface: ISurface,
    private appStrings: IApplicationStrings
  ) {
    super(vorpal, toy, surface);
  }

  public beforeExec() {
    this.addCommands();
    this.vorpal.delimiter(this.appStrings.delimiter);
  }

  public afterExec() {
    this.welcomeMessage();
  }

  private addCommands() {
    this.placeCommand();
    this.defineHelpCommand("place", this.appStrings.commandHelp.place);
    this.defineHelpCommand("move", this.appStrings.commandHelp.move);
    this.defineHelpCommand("left", this.appStrings.commandHelp.left);
    this.defineHelpCommand("right", this.appStrings.commandHelp.right);
    this.defineHelpCommand("report", this.appStrings.commandHelp.report);
    this.defineNoArgsCommand("move", "move");
    this.defineNoArgsCommand("left", "left");
    this.defineNoArgsCommand("right", "right");
    this.defineNoArgsCommand(
      "report",
      "report",
      (result: IPosition & IOrientation) => {
        this.vorpal.log(
          `${result.x},${result.y},${ParseCardinalDirection.numberToString(
            result.orientation
          ).toUpperCase()}`
        );
      }
    );
  }

  private welcomeMessage() {
    this.vorpal.log(this.appStrings.welcomeMessage);
  }

  private placeCommand() {
    this.vorpal
      .command("PLACE <x,y,f>")
      .allowUnknownOptions()
      .alias("place")
      .parse((command, args: Vorpal.args) => {
        if (!isString(args)) {
          return `${command}`;
        }

        return `${command} ${ArgumentAugmenter.encode(args)}`;
      })
      .validate(args => {
        const validArgs = ArgumentValidator.argumentsXYF(args[
          "x,y,f"
        ] as string);

        if (!validArgs) {
          this.vorpal.log(
            this.appStrings.invalidArgument(
              ArgumentAugmenter.decode(args["x,y,f"] as string)
            )
          );
        }

        return validArgs;
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
