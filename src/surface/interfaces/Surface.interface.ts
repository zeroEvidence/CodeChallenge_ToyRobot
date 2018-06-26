import { IPosition } from "../../toy/behaviours/position/interfaces/Position.interface";

export interface ISurface {
  readonly length: number;
  readonly width: number;

  hasSurfaceAtPos(position: IPosition): boolean;
}
