import { IPosition } from "../behaviours/position/interfaces/Position.interface";
import { IToy } from "./Toy.interface";

/**
 * IToyPositional is an interface for toys that are positional
 *
 * @export
 * @interface IToyPositional
 */
export interface IToyPositional<T extends IPosition> extends IToy {
  position: T;
  isPlacedFlag: boolean;
  setPosition(position: T): boolean;
  place(position: T): boolean;
  isPlaced(): boolean;
}
