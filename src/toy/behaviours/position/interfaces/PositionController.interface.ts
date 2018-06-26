import { IPosition } from "../../../position/interfaces/Position.interface";
import { BaseController } from "../../BaseController";

export interface IPositionController<T extends IPosition = IPosition>
  extends BaseController {
  place(surface: T): boolean;
  isPlaced(): boolean;
  setPosition(position: T): boolean;
  validatePosition(position: T): boolean;
}
