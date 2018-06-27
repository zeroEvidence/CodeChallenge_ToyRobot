import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IPosition } from "../position/interfaces/Position.interface";
import { IToyOrientable } from "./ToyOrientable.interface";
import { IToyPlaceable } from "./ToyPlaceable.interface";

/**
 * IToyManipulate is an union interface of IToyPlaceable, and IToyOrientable
 *
 * @export
 * @interface IToyManipulatable
 * @extends {IToyPlaceable<P>}
 * @extends {IToySurfaceMountable<S>}
 * @extends {IToyOrientable}
 * @template P
 * @template S
 */
export interface IToyManipulatable<
  P extends IPosition = IPosition,
  S extends ISurface = ISurface
> extends IToyPlaceable<P>, IToyOrientable {
  //
}
