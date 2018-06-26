import { IPosition } from "./behaviours/position/interfaces/Position.interface";

export class Position implements IPosition {
  public x: number;
  public y: number;
  public orientation: number;
}
