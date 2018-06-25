import { IEnvironment } from "../toy/interfaces/Environment.interface";
import { IPosition } from "../toy/interfaces/Position.interface";

export abstract class Surface implements IEnvironment {
  public length: number;
  public width: number;

  public hasSurfaceAtPos(position: IPosition): boolean {
    throw Error("Method unimplemented.");
  }
}
