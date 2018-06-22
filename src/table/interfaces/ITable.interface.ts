import { IPosition } from "./IPosition.interface";

export interface ITable {
  readonly length: number;
  readonly width: number;

  hasSurfaceAtPos(position: IPosition): boolean;
}
