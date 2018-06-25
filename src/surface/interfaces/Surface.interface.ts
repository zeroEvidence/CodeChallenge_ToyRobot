import { IPosition } from "../../toy/interfaces/Position.interface";

export interface ISurface {
  readonly length: number;
  readonly width: number;

  hasSurfaceAtPos(position: IPosition): boolean;
}
