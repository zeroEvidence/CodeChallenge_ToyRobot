import { OrientationControllerBase } from "../../../behaviours/orientation/OrientationControllerBase";
import { IToy } from "../../../interfaces/Toy.interface";

export class NESWOrientationController extends OrientationControllerBase {
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

  protected changeOrientation(amount: number) {
    if (!this.toy.isPlaced()) {
      // noop
    }

    this.toy.position.orientation = amount % 4;
  }
}
