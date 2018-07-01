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
import { ToyCommandsBase } from "../ToyCommandsBase";
import { ArgumentValidator } from "./helpers/ArgumentValidator";

/**
 * RobotCommandsAdapter binds the vorpal API with the Robot API.
 *
 * @export
 * @class RobotCommandsAdapter
 * @extends {ToyCommandsBase}
 * @implements {IToyCommandsAdapter}
 */
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

  /**
   * actions to run before showing the terminal.
   *
   * @memberof RobotCommandsAdapter
   */
  public beforeExec() {
    this.addCommands();
    this.vorpal.delimiter(this.appStrings.delimiter);
  }

  /**
   * actions to run after showing the terminal.
   *
   * @memberof RobotCommandsAdapter
   */
  public afterExec() {
    this.welcomeMessage();
  }

  /**
   * Adds the help commands and robot commands
   *
   * @private
   * @memberof RobotCommandsAdapter
   */
  private addCommands() {
    this.placeCommand();

    this.defineHelpCommand("place", this.appStrings.commandHelp.place);
    this.defineHelpCommand("move", this.appStrings.commandHelp.move);
    this.defineHelpCommand("left", this.appStrings.commandHelp.left);
    this.defineHelpCommand("right", this.appStrings.commandHelp.right);
    this.defineHelpCommand("report", this.appStrings.commandHelp.report);

    // first argument is name of the vorpal command, second is the name of the
    // method on Robot
    this.defineNoArgsCommand("move", "move");
    this.defineNoArgsCommand("left", "left");
    this.defineNoArgsCommand("right", "right");
    this.defineNoArgsCommand("report", "report", this.resultPipe.bind(this));
  }

  // The message at app start.
  private welcomeMessage() {
    this.vorpal.log(this.appStrings.welcomeMessage);
  }

  // A custom PLACE command for vorpal
  private placeCommand() {
    this.vorpal
      .command("PLACE <x,y,f>")
      // allow unknown options is good for capturing potentially problematic
      // arguments like this one.
      .allowUnknownOptions()
      // alt command name.
      .alias("place")
      // function to parse the arguments before padding them along to validate
      // and action.
      .parse(this.parsePlaceArguments.bind(this))
      // function that validates the arguments, true passes it on to action.
      .validate(this.placeValidate.bind(this))
      // the function that is run if the above is successful.
      .action(this.placeAction.bind(this));
  }

  // parses negative numbers, (causes problems for the validator and action if
  // you dont!), as -<argument> is interpreted as an option being passed.
  private parsePlaceArguments(command: string, args: Vorpal.args) {
    // if more than one argument is passed it won't be a string and it's not
    // valid anyhow, so give back the command with no arguments, which will
    // print the "invalid arguments" message
    if (!isString(args)) {
      return `${command}`;
    }

    // Otherwise encode it.
    return `${command} ${ArgumentAugmenter.encode(args)}`;
  }

  private placeValidate(args: Vorpal.args) {
    // if the arguments are valid.
    const validArgs = ArgumentValidator.argumentsXYF(args["x,y,f"] as string);

    if (!validArgs) {
      // if invalid, print the "invalid arguments" message.
      this.vorpal.log(
        this.appStrings.invalidArgument(
          ArgumentAugmenter.decode(args["x,y,f"] as string)
        )
      );
    }

    // pass a boolean to confirm the validity.
    return validArgs;
  }

  private placeAction(args: Vorpal.args, cb: () => void) {
    // decode the arguments
    const xyf = ArgumentAugmenter.decode(args["x,y,f"] as string);

    // build the requires objects for Robot's place method and execute "place"
    // method against the surface
    this.commandToy(
      args,
      cb,
      "place",
      // pipe the result to a function.
      void 0,
      ParseXYF.toPositionObject(xyf),
      ParseXYF.toOrientationObject(xyf),
      this.surface
    );
  }

  /**
   * resultPipe is a pipe for result from Robot's report method, it takes the
   * position object and forms it as x,y,f
   *
   * @private
   * @param {(IPosition & IOrientation)} result
   * @memberof RobotCommandsAdapter
   */
  private resultPipe(result: IPosition & IOrientation) {
    this.vorpal.log(
      `${result.x},${result.y},${ParseCardinalDirection.numberToString(
        result.orientation
      ).toUpperCase()}`
    );
  }
}
