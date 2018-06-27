import { IPosition } from "../../../position/interfaces/Position.interface";

export interface IPositionController<T extends IPosition = IPosition> {
  place(surface: T): boolean;
  isPlaced(): boolean;
  setPosition(position: T): boolean;
  validatePosition(position: T): boolean;
}
