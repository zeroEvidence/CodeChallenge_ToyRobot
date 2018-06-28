import { IOrientation } from "../../../orientation/interfaces/Orientation";

export interface IOrientationController<T extends IOrientation = IOrientation> {
  left(): void;
  right(): void;
  validateOrientation(orientation: T): boolean;
}
