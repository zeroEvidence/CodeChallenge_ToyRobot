import { IPosition } from "../toy/interfaces/Position.interface";
import { ISurface } from "./interfaces/Surface.interface";

export abstract class Surface implements ISurface {
  public length: number;
  public width: number;

  public hasSurfaceAtPos(position: IPosition): boolean {
    throw Error("Method unimplemented.");
  }
}
