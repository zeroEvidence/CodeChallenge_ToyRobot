import { IOrientationController } from "../../../behaviours/orientation/interfaces/OrientationController.interface";
import { IPosition } from "../../../position/interfaces/Position.interface";
import { Toy } from "../../../Toy";

export class NESWOrientationController extends Toy
  implements IOrientationController {
  constructor() {
    super();
  }

  public left() {
    this.changeOrientation(++this.position.orientation);
  }

  public right() {
    this.changeOrientation(
      --this.position.orientation === -1 ? 3 : this.position.orientation
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
    if (!this.isPlaced()) {
      // noop
    }

    this.position.orientation = amount % 4;
  }
}
