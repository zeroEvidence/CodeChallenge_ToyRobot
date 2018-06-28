import { ISurface } from "../../../../surface/interfaces/Surface.interface";
import { IOrientation } from "../../../orientation/interfaces/Orientation";
import { IPosition } from "../../../position/interfaces/Position.interface";

export interface IPositionController<
  P extends IPosition = IPosition,
  O extends IOrientation = IOrientation,
  S extends ISurface = ISurface
> {
  place(position: P, orientation: O, surface?: S): boolean;
  setPosition(position: P, surface?: S): boolean;
  validatePosition(position: P, surface?: S): boolean;
}
