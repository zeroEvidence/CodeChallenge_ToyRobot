import { IReportController } from "../../../behaviours/report/interfaces/ReportController.interface";
import { IToy } from "../../../interfaces/Toy.interface";
import { IPosition } from "../../../position/interfaces/Position.interface";

/**
 * ReportController give a toy the ability to report it's current position
 * state.
 *
 * @export
 * @class ReportPositionController
 * @implements {IReportController<IPosition>}
 * @template T
 */
export class ReportPositionController<T extends IToy = IToy>
  implements IReportController<IPosition> {
  constructor() {
    //
  }

  public report(this: T) {
    if (this.validatePlacement()) {
      return { ...this.position, ...this.orientation };
    }
  }
}
