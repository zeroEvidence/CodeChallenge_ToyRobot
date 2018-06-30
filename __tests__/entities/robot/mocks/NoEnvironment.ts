import { Surface } from "../../../../src/entities/surface/Surface";
import { IPosition } from "../../../../src/entities/toy/position/interfaces/Position.interface";

export class NoEnvironment extends Surface {
  public hasSurfaceAtPos(position: IPosition) {
    return false;
  }
}
