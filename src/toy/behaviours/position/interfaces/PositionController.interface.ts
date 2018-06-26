import { IPosition } from "./Position.interface";

export interface IPositionController<T extends IPosition> {
  place(surface: T): void;
  isPlaced(): boolean;
  setPosition(position: IPosition): boolean;
  validatePosition(position: IPosition): boolean;
}
