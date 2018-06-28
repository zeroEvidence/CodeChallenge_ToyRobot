import { IPosition } from "./interfaces/Position.interface";

export class Position implements IPosition {
  constructor(public x = -1, public y = -1) {}
}
