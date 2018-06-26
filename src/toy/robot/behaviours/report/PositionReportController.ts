import { ControllerBase } from "../../../behaviours/BaseController";
import { IPosition } from "../../../behaviours/position/interfaces/Position.interface";
import { IReportController } from "../../../behaviours/report/interfaces/ReportController.interface";
import { IToy } from "../../../interfaces/Toy.interface";

export class ReportController extends ControllerBase
  implements IReportController<IPosition> {
  constructor(protected toy: IToy) {
    super(toy);
  }

  // By default toys do not report.
  public report() {
    if (this.toy.isPlaced()) {
      return this.toy.position;
    }
  }
}
