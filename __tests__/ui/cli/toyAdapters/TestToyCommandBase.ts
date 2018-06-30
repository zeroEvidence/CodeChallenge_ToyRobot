import Vorpal = require("vorpal");
import { ISurface } from "../../../../src/entities/surface/interfaces/Surface.interface";
import { IToy } from "../../../../src/entities/toy/interfaces/Toy.interface";
import { ToyCommandsBase } from "../../../../src/ui/cli/toyAdapters/ToyCommandsBase";

export class TestToyCommandBase extends ToyCommandsBase {
  constructor(vorpal: Vorpal, toy: IToy, surface: ISurface) {
    super(vorpal, toy, surface);
  }
  public defineNoArgsCommand(
    commandName: string,
    toyMethodName: string,
    resultPipe?: (result: any) => void
  ) {
    return super.defineNoArgsCommand(commandName, toyMethodName, resultPipe);
  }
  public noArgumentsAllowed(args: Vorpal.args) {
    return super.noArgumentsAllowed(args);
  }
  public commandToy(
    vorpalArgs: Vorpal.args,
    cb: () => void,
    toyMethodName: string,
    resultPipe?: (result: any) => void,
    ...args: any[]
  ) {
    return super.commandToy(vorpalArgs, cb, toyMethodName, resultPipe, args);
  }
  public defineHelpCommand(commandName: string, commandHelp: string[]) {
    return super.defineHelpCommand(commandName, commandHelp);
  }
  public logStringArray(message: string[], cb: () => void) {
    return super.logStringArray(message, cb);
  }
}
