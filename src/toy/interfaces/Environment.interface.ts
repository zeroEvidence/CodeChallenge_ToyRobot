import { IPosition } from "./Position.interface";

export interface IEnvironment {
  readonly length: number;
  readonly width: number;

  hasSurfaceAtPos(position: IPosition): boolean;
}
