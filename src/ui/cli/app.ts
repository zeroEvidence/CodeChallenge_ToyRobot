/// <reference path="../../../typings/modules/vorpal/index.d.ts" />
import Vorpal = require("vorpal");
import { ApplicationConfig } from "../strings/ApplicationStrings";
import { IToyCommands } from "./interfaces/ToyCommands";

export class AppCLI {
  constructor(private vorpal: Vorpal, private toyCommands: IToyCommands) {
    this.init();
  }

  public execute() {
    this.vorpal.delimiter("toy-robot$").show();
    this.vorpal.log("Toy robot is awaiting your commands.");
  }

  private init() {
    this.addHelp();
    this.catchInvalidCommands();
    this.toyCommands.addCommands();
  }

  private addHelp() {
    this.vorpal.help((cmd: string) => {
      return ApplicationConfig.MainHelp;
    });
  }

  private catchInvalidCommands() {
    this.vorpal.catch("[commands...]").action(function(args, cb) {
      this.log(
        ApplicationConfig.InvalidCommandString(args.commands as string[])
      );
      cb();
    });
  }
}
