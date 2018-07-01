import { IToy } from "./Toy.interface";

/**
 * IToyMoveable is a specification for moveable toys
 *
 * @export
 * @interface IToyMoveable
 * @extends {IToy}
 */
export interface IToyMoveable extends IToy {
  move(): boolean;
}
