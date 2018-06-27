import { IToy } from "./Toy.interface";

/**
 * IToyMoveable is a interface for moveable toys
 *
 * @export
 * @interface IToyMoveable
 * @extends {IToy}
 */
export interface IToyMoveable extends IToy {
  move(): boolean;
}
