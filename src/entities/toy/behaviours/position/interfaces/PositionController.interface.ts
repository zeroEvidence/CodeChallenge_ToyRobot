import { ISurface } from "../../../../surface/interfaces/Surface.interface";
import { IOrientation } from "../../../orientation/interfaces/Orientation";
import { IPosition } from "../../../position/interfaces/Position.interface";

/**
 * IPositionController defines a specification for all PositionController
 * classes.
 *
 * @export
 * @interface IPositionController
 * @template P
 * @template O
 * @template S
 */
export interface IPositionController<
  P extends IPosition = IPosition,
  O extends IOrientation = IOrientation,
  S extends ISurface = ISurface
> {
  place(position: P, orientation: O, surface?: S): boolean;
  setPosition(position: P, surface?: S): boolean;
  validatePosition(position: P, surface?: S): boolean;
}
