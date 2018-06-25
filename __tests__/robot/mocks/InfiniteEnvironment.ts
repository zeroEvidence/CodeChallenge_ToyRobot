import { Surface } from "../../../src/surface/Surface";
import { IPosition } from "../../../src/toy/interfaces/Position.interface";

export class InfiniteEnvironment extends Surface {
  public hasSurfaceAtPos(position: IPosition) {
    return true;
  }
}
