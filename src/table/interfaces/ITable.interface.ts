import { ICoordinates } from "./ICoordinates.interface";

export interface ITable {
  readonly length: number;
  readonly width: number;

  hasSurfaceAtCoords(coordinates: ICoordinates): boolean;
}
