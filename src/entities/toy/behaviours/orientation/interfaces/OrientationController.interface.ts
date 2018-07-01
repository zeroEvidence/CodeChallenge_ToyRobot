import { IOrientation } from "../../../orientation/interfaces/Orientation";

/**
 * IOrientationController defines a specification for all OrientationController
 * classes
 *
 * @export
 * @interface IOrientationController
 * @template T
 */
export interface IOrientationController<T extends IOrientation = IOrientation> {
  left(): void;
  right(): void;
  validateOrientation?(orientation: T): boolean;
}
