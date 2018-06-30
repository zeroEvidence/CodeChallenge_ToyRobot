import { CardinalDirection } from "../../entities/toy/robot/behaviours/orientation/CardinalDirections";

export class ParseCardinalDirection {
  public static numberToString(cardinalIndex: number): string {
    return CardinalDirection[cardinalIndex];
  }

  public static stringToNumber(cardinalDirection: string): number {
    return CardinalDirection[
      cardinalDirection.toLowerCase() as keyof typeof CardinalDirection
    ];
  }
}
