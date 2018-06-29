// Type definitions for vorpal 1.12.0
// Project: https://github.com/dthree/vorpal
// Definitions by: (same author as this project)
declare module "vorpal" {
  export = vorpal;

  class vorpal {
    constructor();

    ui: UserInterface;
    activeCommand: ICommandInstance;

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
    catch(commandName: string, commandDescription?: string): this;
    command(commandName: string, commandDescription?: string): ICommand;
    mode(type: string, description: string): mode;
    on(event: events, fn: (data: any) => void): this;
    emit(event: events, data: any): this;
  }

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

  interface ICommand {
    description(description: string): ICommand;
    alias(...alias: string[]): ICommand;
    parse(cb: (command: string, args: args) => string): ICommand;
    option(
      option: string,
      description?: string,
      autocomplete?: string
    ): ICommand;
    types(typeCaster: Object): ICommand;
    hidden(): ICommand;
    remove(): ICommand;
    help(override: (args: args) => void): ICommand;
    validate(validator: (args: args) => boolean): ICommand;
    autoComplete(arg: string[] | Object | autocompleteFn): ICommand;
    action(
      cb: (this: ICommandInstance, args: args, cb?: () => any) => any
    ): ICommand;
    cancel(cb: () => void): ICommand;
    allowUnknownOptions(): ICommand;
  }

  interface args {
    [index: string]: string | number | (string & number)[] | object;
    options?: {
      [namedOptions: string]: string | number;
    };
  }

  interface ICommandInstance {
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
