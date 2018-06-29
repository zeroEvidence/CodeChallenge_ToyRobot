import { ISurface } from "../../../surface/interfaces/Surface.interface";
import { IOrientation } from "../../orientation/interfaces/Orientation";
import { IPosition } from "../../position/interfaces/Position.interface";
import { Toy } from "../../Toy";
import { IPositionController } from "./interfaces/PositionController.interface";

/**
 * PositionController gives a toy the ability to change positions.
 *
 * @export
 * @class PositionController
 * @extends {BaseController}
 */
export class PositionController<
  P extends IPosition = IPosition,
  O extends IOrientation = IOrientation,
  S extends ISurface = ISurface
> extends Toy implements IPositionController<P, O, S> {
  constructor() {
    super();
  }

  public place(position: P, orientation: O, surface?: S) {
    const validPlace =
      this.validateOrientation(orientation) &&
      this.setOrientation(orientation) &&
      this.setPosition(position, surface);

    if (validPlace && surface) {
      this.setSurface(surface);
    }

    return validPlace;
  }

  public setPosition(position: P, surface?: S): boolean {
    const validPosition = this.validatePosition(position, surface);

    if (validPosition) {
      this.position = position;
    }

    return validPosition;
  }

  public validatePosition(position: P, surface?: S): boolean {
    const relativeSurface = surface || this.surface;
    return relativeSurface && relativeSurface.hasSurfaceAtPos(position);
  }
}
