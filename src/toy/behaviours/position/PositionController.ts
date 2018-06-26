import { IToyManipulatable } from "../../interfaces/ToyManipulatable.interface";
import { ToyStrings } from "../../ToyStrings";
import { ControllerBase } from "../BaseController";
import { IPosition } from "./interfaces/Position.interface";
import { IPositionController } from "./interfaces/PositionController.interface";

/**
 * PositionController gives a toy the ability to change positions.
 *
 * @export
 * @class PositionController
 * @extends {ControllerBase}
 */
  constructor(protected toy: IToyManipulatable) {
    super(toy);
  }

  public place(position: IPosition) {
    const positionSet = this.setPosition(position);

    if (positionSet) {
      this.toy.isPlacedFlag = true;
    }

    return positionSet;
  }

  public isPlaced(): boolean {
    if (!this.toy.isPlacedFlag) {
      throw new Error(ToyStrings.missingEnvironment);
    }

    return true;
  }

  public setPosition(position: IPosition): boolean {
    const validPosition = this.validatePosition(position);
    const validOrientation = this.toy.validateOrientation(position);

    if (validPosition && validOrientation) {
      this.toy.position = position;
    }

    return validPosition && validOrientation;
  }

  public validatePosition(position: IPosition): boolean {
    let isValid = false;

    if (this.toy.surface) {
      isValid = true;
    }

    return isValid && this.toy.surface.hasSurfaceAtPos(position);
  }
}
