import { BaseController } from "../../../behaviours/BaseController";
import { IOrientationController } from "../../../behaviours/orientation/interfaces/OrientationController.interface";
import { IPosition } from "../../../behaviours/position/interfaces/Position.interface";
import { IToyPositional } from "../../../interfaces/ToyPositional.interface";

export class NESWOrientationController extends BaseController<IToyPositional>
  implements IOrientationController {
  constructor(toy: IToyPositional) {
    super(toy);
  }

  public left() {
    this.changeOrientation(++this.toy.position.orientation);
  }

  public right() {
    this.changeOrientation(
      --this.toy.position.orientation === -1 ? 3 : this.toy.position.orientation
    );
  }

  public validateOrientation(position: IPosition) {
    let isValid = false;

    if (position.orientation >= 0 && position.orientation < 4) {
      isValid = true;
    }

    return isValid;
  }

  protected changeOrientation(amount: number) {
    if (!this.toy.isPlaced()) {
      // noop
    }

    this.toy.position.orientation = amount % 4;
  }
}
