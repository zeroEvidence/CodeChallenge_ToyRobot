import { IReportController } from "../../../behaviours/report/interfaces/ReportController.interface";
import { IPosition } from "../../../position/interfaces/Position.interface";
import { Toy } from "../../../Toy";

export class ReportPositionController extends Toy
  implements IReportController<IPosition> {
  constructor() {
    super();
  }

  public report() {
    if (this.isPlaced()) {
      return this.position;
    }
  }
}
