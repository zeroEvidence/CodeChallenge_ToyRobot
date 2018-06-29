export class ArgumentValidator {
  public static argumentsXYF(args: string) {
    return /(?:neg)?\d,(?:neg)?\d,\w/.test(args);
  }
}
