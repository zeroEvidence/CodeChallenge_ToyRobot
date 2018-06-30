import { IReportController } from "../../../behaviours/report/interfaces/ReportController.interface";
import { IToy } from "../../../interfaces/Toy.interface";
import { IPosition } from "../../../position/interfaces/Position.interface";

export class ReportPositionController<T extends IToy = IToy>
  implements IReportController<IPosition> {
  constructor() {}

  public report(this: T) {
    if (this.validatePlacement()) {
      return { ...this.position, ...this.orientation };
    }
  }
}
