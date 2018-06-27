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

  public place(position: P) {
    const positionSet = this.setPosition(position);

    if (positionSet) {
      this.isPlacedFlag = true;
    }

    return positionSet;
  }

  public isPlaced(): boolean {
    if (!this.isPlacedFlag) {
      throw new Error(ToyStrings.missingEnvironment);
    }

    return true;
  }

  public setPosition(position: P): boolean {
    const validPosition = this.validatePosition(position);
    const validOrientation = this.validateOrientation(position);

    if (validPosition && validOrientation) {
      this.position = position;
    }

    return validPosition && validOrientation;
  }

  public validatePosition(position: P): boolean {
    let isValid = false;

    if (this.surface) {
      isValid = true;
    }

    return isValid && this.surface.hasSurfaceAtPos(position);
  }
}
