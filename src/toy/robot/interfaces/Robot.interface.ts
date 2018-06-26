import { IToyManipulatable } from "../../interfaces/ToyManipulatable.interface";
import { IToyMoveable } from "../../interfaces/ToyMoveable.interface";
import { IToyReportable } from "../../interfaces/ToyReportable.interface";

export interface IRobot
  extends IToyManipulatable,
    IToyReportable,
    IToyMoveable {
  //
}
