import { CardinalDirections } from "../behaviours/orientation/CardinalDirections";

export interface IPosition {
  x: number;
  y: number;
  orientation: CardinalDirections;
}
