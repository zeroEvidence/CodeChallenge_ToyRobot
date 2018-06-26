import { IPosition } from "../../position/interfaces/Position.interface";

export interface IOrientationController<T extends IPosition = IPosition> {
  left(): void;
  right(): void;
  validateOrientation(position: T): boolean;
}
