import { IPosition } from "../toy/orientation/interfaces/Position.interface";
import { ISurface } from "./interfaces/Surface.interface";

export abstract class Surface implements ISurface {
  public length: number;
  public width: number;

  public abstract hasSurfaceAtPos(position: IPosition): boolean;
}
