import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IOrientation } from "../orientation/interfaces/Orientation";
import { IPosition } from "../position/interfaces/Position.interface";

/**
 * IToy is the interface for all generic toys
 *
 * intentionally left blank as to provide default properties or methods for
 * future modifications
 *
 * @export
 * @interface IToy
 */
export interface IToy<
  P extends IPosition = IPosition,
  O extends IOrientation = IOrientation,
  S extends ISurface = ISurface
> {
  type: number;

  // All toys can be placed on a surface
  surface: S;
  // All toys can have a position
  position: P;
  // All toys can have an orientation
  orientation: O;

  setSurface(surface: S): void;
  setPosition(position: P): boolean;
  setOrientation(IOrientation: O): boolean;

  validateOrientation(orientation: O): boolean;
  validatePosition(position: P): boolean;
  validatePlacement(): boolean;
}
