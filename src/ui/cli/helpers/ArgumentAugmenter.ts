export class ArgumentAugmenter {
  public static encode(args: string) {
    return (args as string).replace("-", "neg");
  }

  public static decode(args: string) {
    return args.replace("neg", "-");
  }
}
