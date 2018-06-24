import { Environment } from "../../../src/environment/Environment";
import { IPosition } from "../../../src/toy/interfaces/Position.interface";

export class InfiniteEnvironment extends Environment {
  public hasSurfaceAtPos(position: IPosition) {
    return true;
  }
}
