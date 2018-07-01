/**
 * ArgumentAugmenter encodes/decodes arguments from vorpal's stdin.
 *
 * it changes any dashes (negatives) to neg and vice versa.
 *
 * @export
 * @class ArgumentAugmenter
 */
export class ArgumentAugmenter {
  public static encode(args: string) {
    return (args as string).replace(/-/g, "neg");
  }

  public static decode(args: string) {
    return args.replace(/neg/g, "-");
  }
}
