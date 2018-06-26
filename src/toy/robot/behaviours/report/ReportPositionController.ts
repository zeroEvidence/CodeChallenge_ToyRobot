import { BaseController } from "../../../behaviours/BaseController";
import { IReportController } from "../../../behaviours/report/interfaces/ReportController.interface";
import { IToyPositional } from "../../../interfaces/ToyPositional.interface";
import { IPosition } from "../../../position/interfaces/Position.interface";

export class ReportPositionController extends BaseController<IToyPositional>
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
