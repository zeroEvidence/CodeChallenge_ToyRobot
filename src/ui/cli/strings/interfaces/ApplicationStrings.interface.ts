/**
 * IApplicationStrings defines a specification for application strings.
 *
 * @export
 * @interface IApplicationStrings
 */
export interface IApplicationStrings {
  delimiter: string;
  welcomeMessage: string;
  mainHelp: string;
  commandHelp: { [index: string]: string[] };
  invalidCommand(args: Array<string | number>): string;
  invalidArgument(args: string): string;
}
