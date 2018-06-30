// Type definitions for vorpal 1.12.0
// Project: https://github.com/dthree/vorpal
// Definitions by: (same author as this project)

// declare module "vorpal" {
export = Vorpal;

declare class Vorpal {
  constructor();

  ui: Vorpal.UserInterface;
  activeCommand: Vorpal.CommandInstance;

  parse(processArgv: any, options?: any): this;
  delimiter(delimiter: string): this;
  show(): this;
  hide(): this;
  find(cmdName: string): this;
  exec(cmdName: string, cb?: any): this;
  execSync(cmd: string, options?: { fatal: boolean }): this;
  log(...args: any[]): this;
  history(id: string): this;
  localStorage(id: string): this;
  help(fn: (cmd: string) => string): void;
  pipe(fn: (stdout: string) => string): this;
  use(commands: string | Object | Function): this;
  catch(commandName: string, commandDescription?: string): Vorpal.Command;
  command(commandName: string, commandDescription?: string): Vorpal.Command;
  mode(type: string, description: string): Vorpal.mode;
  on(event: Vorpal.events, fn: (data: any) => void): this;
  emit(event: Vorpal.events, data: any): this;
}

declare namespace Vorpal {
  interface UserInterface {
    delimiter(delimiter?: string): void;
    input(cmd: string): void;
    imprint(): void;
    submit(cmd: string): void;
    cancel(): void;
    redraw: {
      (...text: string[]): void;
      clear: () => void;
      done: () => void;
    };
  }

  interface mode {
    delimiter(delimiter: string): mode;
    init(initFn: (args: args, cb: () => void) => void): mode;
    action(command: string, cb: () => void): mode;
  }

  interface Command {
    description(description: string): Command;
    alias(...alias: string[]): Command;
    parse(cb: (command: string, args: args) => string): Command;
    option(
      option: string,
      description?: string,
      autocomplete?: string
    ): Command;
    types(typeCaster: Object): Command;
    hidden(): Command;
    remove(): Command;
    help(override: (args: args) => void): Command;
    validate(validator: (args: args) => boolean): Command;
    autoComplete(arg: string[] | Object | autocompleteFn): Command;
    action(
      cb: (this: CommandInstance, args: args, cb?: () => any) => any
    ): Command;
    cancel(cb: () => void): Command;
    allowUnknownOptions(): Command;
  }

  export interface args {
    [index: string]: string | number | (string & number)[] | object;
    options?: {
      [namedOptions: string]: string | number;
    };
  }

  interface CommandInstance {
    log(...args: any[]): void;
    prompt(questions: inquirer.question[]): void;
    delimiter(str: any): void;
  }

  type autocompleteFn = (
    text: string,
    iteration: number,
    cb: (something: any, iteratable: string[]) => any
  ) => any;

  type answersFunction = (answers: any) => any;
  type arrayOfAnswersFunction = (answers: any) => any[];
  type whenFunction = (answers: any) => boolean;
  type events =
    | "command_registered"
    | "keypress"
    | "client_prompt_submit"
    | "client_command_executed"
    | "client_command_error";

  namespace inquirer {
    interface question {
      type:
        | "input"
        | "confirm"
        | "list"
        | "rawlist"
        | "expand"
        | "checkbox"
        | "password"
        | "editor";
      name: string;
      message: string | answersFunction;
      default: string | number | boolean | Array<any> | answersFunction;
      choices: Array<any> | arrayOfAnswersFunction;
      validate: (userInput: any, answers: any) => boolean;
      filter: (userInput: any) => any;
      transformer: (userInput: any, answers: any, options: any) => any;
      when: boolean | whenFunction;
      pageSize: number;
      prefix: string;
      suffix: string;
    }
  }
}
// }
