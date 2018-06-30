import { IOrientationController } from "../../../behaviours/orientation/interfaces/OrientationController.interface";
import { IOrientation } from "../../../orientation/interfaces/Orientation";
import { IRobot } from "../../interfaces/Robot.interface";

export class NESWOrientationController<T extends IRobot = IRobot>
  implements IOrientationController {
  constructor() {}

  public left(this: T) {
    const newOrientation = this.orientation.orientation - 1;

    this.changeOrientation(newOrientation === -1 ? 3 : newOrientation);
  }

  public right(this: T) {
    this.changeOrientation(this.orientation.orientation + 1);
  }

  public validateOrientation(orientation: IOrientation) {
    let isValid = false;

    if (orientation.orientation >= 0 && orientation.orientation < 4) {
      isValid = true;
    }

    return isValid;
  }

  public changeOrientation(this: T, amount: number) {
    if (this.validatePlacement()) {
      this.orientation.orientation = amount % 4;
    }
  }
}
