import { Environment } from "../../../src/environment/Environment";
import { IPosition } from "../../../src/toy/interfaces/Position.interface";

export class NoEnvironment extends Environment {
  public hasSurfaceAtPos(position: IPosition) {
    return false;
  }
}
