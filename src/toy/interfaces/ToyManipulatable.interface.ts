import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IPosition } from "../behaviours/position/interfaces/Position.interface";
import { IToyOrientable } from "./ToyOrientable.interface";
import { IToyPositional } from "./ToyPositional.interface";
import { IToySurfaceMountable } from "./ToySurfaceMountable.interface";

/**
 * IToyManipulate is an union interface of IToyPositional, IToySurfacemountable,
 * and IToyOrientable
 *
 * @export
 * @interface IToyManipulatable
 * @extends {IToyPositional<P>}
 * @extends {IToySurfaceMountable<S>}
 * @extends {IToyOrientable}
 * @template P
 * @template S
 */
export interface IToyManipulatable<
  P extends IPosition = IPosition,
  S extends ISurface = ISurface
> extends IToyPositional<P>, IToySurfaceMountable<S>, IToyOrientable {
  //
}
