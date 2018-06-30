export class ArgumentValidator {
  public static argumentsXYF(args: string) {
    return /^\d+,\d+,(?:north|south|east|west)$/i.test(args);
  }
}
