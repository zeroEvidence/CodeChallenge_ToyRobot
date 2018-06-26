import { BaseController } from "../../../behaviours/BaseController";
import { IOrientationController } from "../../../behaviours/orientation/interfaces/OrientationController.interface";
import { IToy } from "../../../interfaces/Toy.interface";

export class NESWOrientationController extends ControllerBase
  implements IOrientationController {
  constructor(toy: IToy) {
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

  public validateOrientation() {
    let isValid = false;

    if (
      this.toy.position.orientation >= 0 &&
      this.toy.position.orientation < 4
    ) {
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
