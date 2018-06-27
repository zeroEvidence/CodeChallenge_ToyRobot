import { BaseBehavioursFactory } from "../../behaviours/BehavioursFactory";
import { IBehavioursFactory } from "../../behaviours/interfaces/BehavioursFactory.interface";
import { IToyPositional } from "../../interfaces/ToyPositional.interface";
import { MoveOneUnitController } from "./move/MoveOneUnitController";
import { NESWOrientationController } from "./orientation/NESWOrientationController";
import { ReportPositionController } from "./report/ReportPositionController";

export class RobotBehavioursFactory extends BaseBehavioursFactory
  implements IBehavioursFactory {
  constructor() {
    super();
  }

  public createMoveController(toy: IToyPositional) {
    return new MoveOneUnitController(toy);
  }

  public createOrientationController(toy: IToyPositional) {
    return new NESWOrientationController(toy);
  }

  public createReportController(toy: IToyPositional) {
    return new ReportPositionController(toy);
  }
}
