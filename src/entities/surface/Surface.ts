import { IPosition } from "../toy/position/interfaces/Position.interface";
import { ISurface } from "./interfaces/Surface.interface";

/**
 * Surface is the base class shared by all surface objects.
 *
 * @export
 * @abstract
 * @class Surface
 * @implements {ISurface}
 */
export abstract class Surface implements ISurface {
  constructor(public length = 0, public width = 0) {}

  public abstract hasSurfaceAtPos(position: IPosition): boolean;
}
