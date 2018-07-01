import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IPosition } from "../position/interfaces/Position.interface";
import { IToyOrientable } from "./ToyOrientable.interface";
import { IToyPlaceable } from "./ToyPlaceable.interface";

/**
 * IToyManipulate is a union interface of IToyPlaceable, and IToyOrientable.
 *
 * it defines a specification for toy entities that can be manipulated relative
 * to a surface.
 *
 * @export
 * @interface IToyManipulatable
 * @extends {IToyPlaceable<P>}
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
