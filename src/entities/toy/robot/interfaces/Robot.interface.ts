import { IToyManipulatable } from "../../interfaces/ToyManipulatable.interface";
import { IToyMoveable } from "../../interfaces/ToyMoveable.interface";
import { IToyReportable } from "../../interfaces/ToyReportable.interface";

/**
 * IRobot defines a specification for all Robot entities.
 *
 * @export
 * @interface IRobot
 * @extends {IToyManipulatable}
 * @extends {IToyReportable}
 * @extends {IToyMoveable}
 */
export interface IRobot
  extends IToyManipulatable,
    IToyReportable,
    IToyMoveable {
  changeOrientation(amount: number): void;
}
