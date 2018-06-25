import { Surface } from "../../../src/surface/Surface";
import { IPosition } from "../../../src/toy/orientation/interfaces/Position.interface";

export class NoEnvironment extends Surface {
  public hasSurfaceAtPos(position: IPosition) {
    return false;
  }
}
