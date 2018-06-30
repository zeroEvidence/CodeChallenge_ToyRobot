import { isUndefined } from "lodash";
import { ParseCardinalDirection } from "./ParseCardinalDirection";

export class ParseXYF {
  public static toPositionObject(xyf: string) {
    return this.createPositionObject(this.split(xyf));
  }

  public static toOrientationObject(xyf: string) {
    return this.createCardinalOrientationObject(this.split(xyf));
  }

  private static split(x: string) {
    return x.split(",");
  }

  private static createPositionObject([x, y, cardinalDirection]: string[]) {
    return {
      x: +x,
      y: +y
    };
  }

  private static createCardinalOrientationObject([
    x,
    y,
    cardinalDirection
  ]: string[]) {
    const numericDirection = ParseCardinalDirection.stringToNumber(
      cardinalDirection
    );

    return {
      orientation: isUndefined(numericDirection) ? -1 : numericDirection
    };
  }
}
