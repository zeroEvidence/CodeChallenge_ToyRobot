/* tslint:disable:ordered-imports */
import Vorpal = require("vorpal");
import { isEmpty, isFunction } from "lodash";
import { ISurface } from "../../../entities/surface/interfaces/Surface.interface";
import { IToy } from "../../../entities/toy/interfaces/Toy.interface";

/**
 * ToyCommandBase is a base class that helps build the commands for vorpal and
 * the robot.
 *
 * @export
 * @abstract
 * @class ToyCommandsBase
 */
export abstract class ToyCommandsBase {
  constructor(
    protected vorpal: Vorpal,
    protected toy: IToy,
    protected surface: ISurface
  ) {
    //
  }

  /**
   * defineNoArgsCommand is a helper method that builds a vorpal command that
   * has no arguments.
   *
   * @protected
   * @param {string} commandName
   * @param {string} toyMethodName
   * @param {(result: any) => void} [resultPipe]
   * @memberof ToyCommandsBase
   */
  protected defineNoArgsCommand(
    commandName: string,
    toyMethodName: string,
    resultPipe?: (result: any) => void
  ) {
    this.vorpal
      .command(`${commandName.toUpperCase()} [arguments]`)
      .alias(`${commandName.toLowerCase()}`)
      .validate(this.noArgumentsAllowed)
      .action((args, cb) => {
        this.commandToy(args, cb, toyMethodName, resultPipe);
        cb();
      });
  }

  /**
   * Argument validator that does not allow arguments to be passed
   *
   * @protected
   * @param {Vorpal.args} args
   * @returns
   * @memberof ToyCommandsBase
   */
  protected noArgumentsAllowed(args: Vorpal.args) {
    if (isEmpty(args.options) && !args.arguments) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * commandToy executes a command <toyMethodName> against the Robot
   *
   * @protected
   * @param {Vorpal.args} vorpalArgs
   * @param {() => void} cb
   * @param {string} toyMethodName
   * @param {(result: any) => void} [resultPipe]
   * @param {...any[]} args
   * @returns
   * @memberof ToyCommandsBase
   */
  protected commandToy(
    vorpalArgs: Vorpal.args,
    cb: () => void,
    toyMethodName: string,
    resultPipe?: (result: any) => void,
    ...args: any[]
  ) {
    try {
      // check that the method exists on the toy.
      if (isFunction((this.toy as any)[toyMethodName])) {
        // execute it with the arguments provided.
        const result = (this.toy as any)[toyMethodName](...args);

        // pipe the results if there is a pipe.
        if (resultPipe) {
          resultPipe(result);
        }

        // tell vorpal that we're done.
        cb();

        // give back the result.
        return result;
      } else {
        // if there's no method by that name...
        throw new Error(`Method '${toyMethodName}' does not exist on toy.`);
      }
    } catch (e) {
      // print whatever error messages occur
      this.vorpal.activeCommand.log(e.message);
      // tell vorpal we're done.
      cb();
      return false;
    }
  }

  /**
   * defines the help commands in the multitude of various ways one can ask for
   * help.
   *
   * @protected
   * @param {string} commandName
   * @param {string[]} commandHelp
   * @memberof ToyCommandsBase
   */
  protected defineHelpCommand(commandName: string, commandHelp: string[]) {
    this.vorpal
      .command(`${commandName.toUpperCase()} help`)
      .alias(`${commandName.toLowerCase()} help`)
      .alias(`${commandName.toUpperCase()} --help`)
      .alias(`${commandName.toLowerCase()} --help`)
      .alias(`help ${commandName.toUpperCase()}`)
      .alias(`help ${commandName.toLowerCase()}`)
      .action((args, cb) => {
        // print the help to the terminal
        this.logStringArray(commandHelp, cb);
      })
      // dont show these as commands in the help menu.
      .hidden();
  }

  /**
   * Print an array of strings to the terminal.
   *
   * @protected
   * @param {string[]} message
   * @param {() => void} cb
   * @memberof ToyCommandsBase
   */
  protected logStringArray(message: string[], cb: () => void) {
    message.forEach(line => this.vorpal.activeCommand.log(line));
    cb();
  }
}
