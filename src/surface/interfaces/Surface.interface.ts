import { IPosition } from "../../toy/orientation/interfaces/Position.interface";

export interface ISurface {
  readonly length: number;
  readonly width: number;

  hasSurfaceAtPos(position: IPosition): boolean;
}
