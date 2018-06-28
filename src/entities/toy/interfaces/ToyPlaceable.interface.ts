import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IOrientation } from "../orientation/interfaces/Orientation";
import { IPosition } from "../position/interfaces/Position.interface";
import { IToy } from "./Toy.interface";

/**
 * IToyPositional is an interface for toys that are positional
 *
 * @export
 * @interface IToyPositional
 */
export interface IToyPlaceable<
  P extends IPosition = IPosition,
  O extends IOrientation = IOrientation,
  S extends ISurface = ISurface
> extends IToy {
  place(position: P, orientation: O, surface?: S): boolean;
}
