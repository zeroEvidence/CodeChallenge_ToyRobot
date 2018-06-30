/* tslint:disable:ordered-imports */
import Vorpal = require("vorpal");
import { isEmpty, isFunction } from "lodash";
import { ISurface } from "../../../entities/surface/interfaces/Surface.interface";
import { IToy } from "../../../entities/toy/interfaces/Toy.interface";

export abstract class ToyCommandsBase {
  constructor(
    protected vorpal: Vorpal,
    protected toy: IToy,
    protected surface: ISurface
  ) {
    //
  }

  protected defineNoArgsCommand(
    commandName: string,
    toyMethodName: string,
    resultPipe?: (result: any) => void
  ) {
    this.vorpal
      .command(`${commandName.toUpperCase()} [arguments]`)
      .alias(`${commandName.toLowerCase()}`)
      .validate(args => {
        return this.noArgumentsAllowed(args);
      })
      .action((args, cb) => {
        this.commandToy(toyMethodName, resultPipe);
        cb();
      });
  }

  protected noArgumentsAllowed(args: Vorpal.args) {
    if (isEmpty(args.options) && !args.arguments) {
      return true;
    } else {
      return false;
    }
  }

  protected commandToy(
    toyMethodName: string,
    resultPipe?: (result: any) => void,
    ...args: any[]
  ) {
    try {
      if (isFunction((this.toy as any)[toyMethodName])) {
        const result = (this.toy as any)[toyMethodName](...args);

        if (resultPipe) {
          resultPipe(result);
        }

        return result;
      } else {
        throw new Error(`Method '${toyMethodName}' does not exist on toy.`);
      }
    } catch (e) {
      this.vorpal.activeCommand.log(e.message);
      return false;
    }
  }

  protected defineHelpCommand(commandName: string, commandHelp: string[]) {
    this.vorpal
      .command(`${commandName.toUpperCase()} help`)
      .alias(`${commandName.toLowerCase()} help`)
      .alias(`${commandName.toUpperCase()} --help`)
      .alias(`${commandName.toLowerCase()} --help`)
      .alias(`help ${commandName.toUpperCase()}`)
      .alias(`help ${commandName.toLowerCase()}`)
      .action((args, cb) => {
        this.logStringArray(commandHelp, cb);
      })
      .hidden();
  }

  protected logStringArray(message: string[], cb: () => void) {
    message.forEach(line => this.vorpal.activeCommand.log(line));
    cb();
  }
}
