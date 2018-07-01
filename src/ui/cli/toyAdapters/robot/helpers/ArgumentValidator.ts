/**
 * ArgumentValidator validates the arguments inbound from the PLACE command.
 *
 * @export
 * @class ArgumentValidator
 */
export class ArgumentValidator {
  public static argumentsXYF(args: string) {
    // Accept strings that match
    // "<positive number>,<positive number>,<NORTH|EAST|SOUTH|WEST>"
    return /^\d+,\d+,(?:north|south|east|west)$/i.test(args);
  }
}
