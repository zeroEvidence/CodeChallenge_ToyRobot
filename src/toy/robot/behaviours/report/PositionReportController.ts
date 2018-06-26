import { ControllerBase } from "../../../behaviours/BaseController";
import { IReportController } from "../../../behaviours/report/interfaces/ReportController.interface";
import { IPosition } from "../../../interfaces/Position.interface";
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
