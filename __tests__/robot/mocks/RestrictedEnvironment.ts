import { Environment } from "../../../src/environment/Environment";
import { IPosition } from "../../../src/toy/interfaces/Position.interface";

export class RestrictedEnvironment extends Environment {
  public hasSurfaceAtPos(position: IPosition) {
    return false;
  }
}
