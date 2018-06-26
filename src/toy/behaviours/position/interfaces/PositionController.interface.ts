import { BaseController } from "../../BaseController";
import { IPosition } from "./Position.interface";

export interface IPositionController<T extends IPosition = IPosition>
  extends BaseController {
  place(surface: T): boolean;
  isPlaced(): boolean;
  setPosition(position: T): boolean;
  validatePosition(position: T): boolean;
}
