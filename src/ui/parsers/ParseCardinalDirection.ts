import { CardinalDirections } from "../../entities/toy/robot/behaviours/orientation/CardinalDirections";

export class ParseCardinalDirections {
  public static numberToString(cardinalIndex: number): string {
    return CardinalDirections[cardinalIndex];
  }

  public static stringToNumber(cardinalDirection: string): number {
    return CardinalDirections[
      cardinalDirection.toLowerCase() as keyof typeof CardinalDirections
    ];
  }
}
