import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IPosition } from "../behaviours/position/interfaces/Position.interface";
import { IToyOrientable } from "./ToyOrientable.interface";
import { IToyPositional } from "./ToyPositional.interface";
import { IToySurfaceMountable } from "./ToySurfaceMountable.interface";

export interface IToyManipulatable<
  P extends IPosition = IPosition,
  S extends ISurface = ISurface
> extends IToyPositional<P>, IToySurfaceMountable<S>, IToyOrientable {
  //
}
