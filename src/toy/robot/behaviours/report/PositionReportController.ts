import { BaseController } from "../../../behaviours/BaseController";
import { IPosition } from "../../../behaviours/position/interfaces/Position.interface";
import { IReportController } from "../../../behaviours/report/interfaces/ReportController.interface";
import { IToyPositional } from "../../../interfaces/ToyPositional.interface";

export class ReportController extends BaseController<IToyPositional>
  implements IReportController<IPosition> {
  constructor(toy: IToyPositional) {
    super(toy);
  }

  public report() {
    if (this.toy.isPlaced()) {
      return this.toy.position;
    }
  }
}
