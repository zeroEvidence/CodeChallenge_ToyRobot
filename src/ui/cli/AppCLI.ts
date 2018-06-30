import Vorpal = require("vorpal");
import { ICommand } from "../../interfaces/Command.interface";
import { IApplicationStrings } from "./strings/interfaces/ApplicationStrings.interface";
import { IToyCommandsAdapter } from "./toyAdapters/interfaces/ToyCommandsAdapter";

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

  private init() {
    this.addHelp();
    this.catchInvalidCommands();
  }

  private addHelp() {
    this.vorpal.help((cmd: string) => {
      return this.appStrings.mainHelp;
    });
  }

  private catchInvalidCommands() {
    this.vorpal.catch("[commands...]").action((args, cb) => {
      this.vorpal.log(
        this.appStrings.invalidCommand(args.commands as string[])
      );
      cb();
    });
  }
}
