import { Surface } from "../../src/entities/surface/Surface";
import { IPosition } from "../../src/entities/toy/position/interfaces/Position.interface";

export class RestrictedEnvironment extends Surface {
  public hasSurfaceAtPos(position: IPosition) {
    let valid = false;

    if (
      position.x >= 0 &&
      position.x < 5 &&
      position.y >= 0 &&
      position.y < 5
    ) {
      valid = true;
    }

    return valid;
  }
}
