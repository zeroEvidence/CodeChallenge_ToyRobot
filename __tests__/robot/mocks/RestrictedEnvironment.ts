import { Environment } from "../../../src/environment/Environment";
import { IPosition } from "../../../src/toy/interfaces/Position.interface";

export class RestrictedEnvironment extends Environment {
  public hasSurfaceAtPos(position: IPosition) {
    let valid = false;

    if (
      position.x >= 0 &&
      position.x < 5 &&
      position.y >= 0 &&
      position.y < 5 &&
      position.orientation >= 0 &&
      position.orientation < 4
    ) {
      valid = true;
    }

    return valid;
  }
}
