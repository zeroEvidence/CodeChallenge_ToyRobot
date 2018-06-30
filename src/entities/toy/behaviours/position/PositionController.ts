import { ISurface } from "../../../surface/interfaces/Surface.interface";
import { IToy } from "../../interfaces/Toy.interface";
import { IOrientation } from "../../orientation/interfaces/Orientation";
import { IPosition } from "../../position/interfaces/Position.interface";
import { IPositionController } from "./interfaces/PositionController.interface";

/**
 * PositionController gives a toy the ability to change positions.
 *
 * @export
 * @class PositionController
 * @extends {BaseController}
 */
export class PositionController<
  T extends IToy = IToy,
  P extends IPosition = IPosition,
  O extends IOrientation = IOrientation,
  S extends ISurface = ISurface
> implements IPositionController<P, O, S> {
  constructor() {
    //
  }

  public place(this: T, position: P, orientation: O, surface?: S) {
    const validPlace =
      this.validateOrientation(orientation) &&
      this.setOrientation(orientation) &&
      this.setPosition(position, surface);

    if (validPlace && surface) {
      this.setSurface(surface);
    }

    if (validPlace) {
      return true;
    }

    throw Error(this.toyStrings.invalidPlace);
  }

  public setPosition(this: T, position: P, surface?: S): boolean {
    const validPosition = this.validatePosition(position, surface);

    if (validPosition) {
      this.position = position;
    }

    return validPosition;
  }

  public validatePosition(this: T, position: P, surface?: S): boolean {
    const relativeSurface = surface || this.surface;
    return relativeSurface && relativeSurface.hasSurfaceAtPos(position);
  }
}
