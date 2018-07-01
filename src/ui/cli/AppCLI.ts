import Vorpal = require("vorpal");
import { ICommand } from "../../interfaces/Command.interface";
import { IApplicationStrings } from "./strings/interfaces/ApplicationStrings.interface";
import { IToyCommandsAdapter } from "./toyAdapters/interfaces/ToyCommandsAdapter";

/**
 * AppCLI is the class that begins the CLI application.
 *
 * @export
 * @class AppCLI
 * @implements {ICommand}
 */
export class AppCLI implements ICommand {
  constructor(
    private vorpal: Vorpal,
    private toyCommands: IToyCommandsAdapter,
    private appStrings: IApplicationStrings
  ) {
    this.init();
  }

  public execute() {
    this.toyCommands.beforeExec();
    this.vorpal.show();
    this.toyCommands.afterExec();
  }

  // initialise
  private init() {
    this.addHelp();
    this.catchInvalidCommands();
  }

  private addHelp() {
    this.vorpal.help((cmd: string) => {
      return this.appStrings.mainHelp;
    });
  }

  // in the form of $ foo bar baz, it will log an invalid command message.
  private catchInvalidCommands() {
    this.vorpal.catch("[commands...]").action((args, cb) => {
      this.vorpal.log(
        this.appStrings.invalidCommand(args.commands as string[])
      );
      cb();
    });
  }
}
